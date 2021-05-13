package pl.CPMA.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.CPMA.main.model.Device;

import java.util.List;
import java.util.Optional;

public interface DeviceRepository extends JpaRepository<Device, Long> {
    Optional<Device> findByAndroidID(String username);
    Boolean existsDeviceByAndroidID(String androidID);
    List<Device> findAllByOrderByIdAsc();
}
