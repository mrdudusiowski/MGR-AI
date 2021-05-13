package pl.CPMA.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import pl.CPMA.core.payload.response.MessageResponse;
import pl.CPMA.core.security.services.UserDetails;
import pl.CPMA.main.model.Battery;
import pl.CPMA.main.model.Device;
import pl.CPMA.main.model.Localisation;
import pl.CPMA.main.model.User;
import pl.CPMA.main.model.request.BatteryRequest;
import pl.CPMA.main.model.request.DeviceRequest;
import pl.CPMA.main.model.request.LocationRequest;
import pl.CPMA.main.repository.BatteryRepository;
import pl.CPMA.main.repository.DeviceRepository;
import pl.CPMA.main.repository.LocalisationRepository;
import pl.CPMA.main.service.DeviceService;
import pl.CPMA.main.service.UserService;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/android")
public class AndroidController {

    @Autowired
    DeviceRepository deviceRepository;

    @Autowired
    DeviceService deviceService;

    @Autowired
    LocalisationRepository localisationRepository;

    @Autowired
    BatteryRepository batteryRepository;

    @Autowired
    UserService userService;

    @PutMapping("/saveDevice")
    public ResponseEntity<?> saveDevice(@Valid @RequestBody DeviceRequest deviceRequest) {
        Device device;
        User currentUser;

        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(userDetails != null && userDetails.getUsername() != null){
            currentUser = userService.getUserByUsername(userDetails.getUsername());
            if(currentUser == null)
                return ResponseEntity.badRequest().body(new MessageResponse("User with that username not exist in database."));
        }else{
            return ResponseEntity.badRequest().body(new MessageResponse("No logged in user."));
        }

        if (!deviceRepository.existsDeviceByAndroidID(deviceRequest.getAndroidID())){
                device = new Device(deviceRequest.getAndroidID(),
                        deviceRequest.getManufacturer(),
                        deviceRequest.getBrand(),
                        deviceRequest.getProduct(),
                        deviceRequest.getPhoneModel(),
                        deviceRequest.getDeviceVersion(),
                        deviceRequest.getVersionRelease(),
                        deviceRequest.getVersion(),
                        deviceRequest.getSerial(),
                        deviceRequest.getWidth(),
                        deviceRequest.getHeight());
                device.setUser(currentUser);
                device.setDraft(false);
                deviceRepository.save(device);

                return ResponseEntity.ok().body(device);
            } else {
                device = deviceService.getDeviceByAndroidId(deviceRequest.getAndroidID());
                if (device.getUser() == null || device.getUser().getId() != currentUser.getId()){
                    device.setUser(currentUser);
                    deviceRepository.save(device);
                }

                return ResponseEntity.ok().body(new MessageResponse("Device already exist in database."));
            }
    }

    @PostMapping("/saveLocation")
    public ResponseEntity<?> saveLocation(@Valid @RequestBody LocationRequest locationRequest) {
        Device device = deviceService.getDeviceByAndroidId(locationRequest.getAndroidID());
        if(device.getLocalisation() == null){
            Localisation localisation = new Localisation(locationRequest.getLatitude(), locationRequest.getLongitude());
            localisation.setDraft(false);
            device.setLocalisation(localisation);
            deviceRepository.save(device);
        } else {
            Localisation localisation = device.getLocalisation();
            localisation.setLatitude(locationRequest.getLatitude());
            localisation.setLongitude(locationRequest.getLongitude());
            localisationRepository.save(localisation);
        }
        return ResponseEntity.ok(new MessageResponse("Location saved successfully."));
    }

    @PostMapping("/saveBattery")
    public ResponseEntity<?> saveBattery(@Valid @RequestBody BatteryRequest batteryRequest) {
        Device device = deviceService.getDeviceByAndroidId(batteryRequest.getAndroidID());
        if(device.getBattery() == null){
            Battery battery = new Battery(batteryRequest.getBatteryLevel());
            battery.setDraft(false);
            device.setBattery(battery);
            deviceRepository.save(device);
        } else {
            Battery battery = device.getBattery();
            battery.setBatteryLevel(batteryRequest.getBatteryLevel());
            batteryRepository.save(battery);
        }return ResponseEntity.ok(new MessageResponse("Battery saved successfully."));
    }
}
