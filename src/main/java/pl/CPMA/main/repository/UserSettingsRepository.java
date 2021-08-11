package pl.CPMA.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.CPMA.main.model.UserSettings;

public interface UserSettingsRepository extends JpaRepository<UserSettings, Long> {
    UserSettings findByUser_Id(Long user_id);
}
