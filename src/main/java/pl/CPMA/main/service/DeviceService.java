package pl.CPMA.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import pl.CPMA.main.model.Device;
import pl.CPMA.main.model.User;
import pl.CPMA.main.repository.DeviceRepository;

@Component
public class DeviceService {
    @Autowired
    private DeviceRepository deviceRepository;

    public Device getDeviceByAndroidId(String androidId) {
        return deviceRepository.findByAndroidID(androidId).orElseThrow(() -> new RuntimeException("Couldn't find a Device with id: "+androidId));
    }
}
