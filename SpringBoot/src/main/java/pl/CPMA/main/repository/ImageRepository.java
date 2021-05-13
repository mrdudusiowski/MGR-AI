package pl.CPMA.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.CPMA.main.model.ImageModel;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {
}
