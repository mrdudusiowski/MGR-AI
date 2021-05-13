package pl.CPMA.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.CPMA.core.payload.response.MessageResponse;
import pl.CPMA.main.model.Device;
import pl.CPMA.main.repository.DeviceRepository;
import pl.CPMA.main.service.DeviceService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/device")
public class DeviceController {

	@Autowired
	DeviceRepository deviceRepository;

	@Autowired
	DeviceService deviceService;

	@GetMapping("/getDevice")
	public ResponseEntity<?> getDevice(@RequestParam Long id){
		if(deviceRepository.existsById(id)){
			Device device = deviceRepository.getOne(id);
			return ResponseEntity.ok().body(device);
		}else{
			return ResponseEntity.badRequest()
					.body(new MessageResponse("Device with that ID not found."));
		}
	}

	@GetMapping("/getAll")
	public  ResponseEntity<?> getAllDevices(){
		return  ResponseEntity.ok(deviceRepository.findAllByOrderByIdAsc());
	}
}
