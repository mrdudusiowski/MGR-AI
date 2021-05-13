package pl.CPMA.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.CPMA.main.model.Battery;

public interface BatteryRepository extends JpaRepository<Battery, Long> {
    Long countAllByBatteryLevelGreaterThanEqualAndBatteryLevelLessThanEqual(Float batteryGrater, Float batteryLess);
}
