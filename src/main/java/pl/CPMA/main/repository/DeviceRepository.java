package pl.CPMA.main.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import pl.CPMA.main.model.Device;

import java.util.List;
import java.util.Optional;

public interface DeviceRepository extends PagingAndSortingRepository<Device, Long> {
    Optional<Device> findByAndroidID(String username);
    Boolean existsDeviceByAndroidID(String androidID);
    Page<Device> findAllByOrderByIdAsc(Pageable pageable);
    List<Device> findAllByOrderByAndroidID();
}
