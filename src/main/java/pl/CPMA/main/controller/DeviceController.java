package pl.CPMA.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.CPMA.core.payload.response.MessageResponse;
import pl.CPMA.main.model.Device;
import pl.CPMA.main.model.User;
import pl.CPMA.main.repository.DeviceRepository;
import pl.CPMA.main.service.DeviceService;

import java.util.List;
import java.util.stream.Collectors;


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
			Device device = deviceService.getDeviceById(id);
			return ResponseEntity.ok().body(device);
		}else{
			return ResponseEntity.badRequest()
					.body(new MessageResponse("Device with that ID not found."));
		}
	}

	@GetMapping("/getAll")
	public  Page<Device> getAllDevices(@RequestParam(name = "page", defaultValue = "0") int page,
									   @RequestParam(name = "size", defaultValue = "10") int size) {
		PageRequest pageRequest = PageRequest.of(page, size);
		Page<Device> pageResult = deviceRepository.findAllByOrderByIdAsc(pageRequest);
		List<Device> devices = pageResult
				.stream()
				.collect(Collectors.toList());

		return new PageImpl<>(devices, pageRequest, pageResult.getTotalElements());
	}

	@GetMapping("/getDevicesList")
	public  ResponseEntity<?> getDevicesList() {
		return  ResponseEntity.ok(deviceRepository.findAllByOrderByAndroidID());
	}
}
