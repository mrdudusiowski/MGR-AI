package pl.CPMA.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.CPMA.main.repository.BatteryRepository;
import pl.CPMA.main.repository.DeviceRepository;
import pl.CPMA.main.repository.UserRepository;

import java.util.HashMap;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    DeviceRepository deviceRepository;

    @Autowired
    BatteryRepository batteryRepository;

    @GetMapping("/getData")
    public ResponseEntity<?> getUser(){
        HashMap<String, Long> dataMap = new HashMap<>();
        dataMap.put("userCount", userRepository.count());
        dataMap.put("deviceCount", deviceRepository.count());
        dataMap.put("batteryGood", batteryRepository.countAllByBatteryLevelGreaterThanEqualAndBatteryLevelLessThanEqual((float) 75, (float) 100));
        dataMap.put("batteryMedium",  batteryRepository.countAllByBatteryLevelGreaterThanEqualAndBatteryLevelLessThanEqual((float) 25, (float) 74));
        dataMap.put("batteryLow", batteryRepository.countAllByBatteryLevelGreaterThanEqualAndBatteryLevelLessThanEqual((float) 0, (float) 24));

        return ResponseEntity.ok().body(dataMap);
    }
}
