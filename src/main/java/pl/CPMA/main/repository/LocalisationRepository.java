package pl.CPMA.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.CPMA.main.model.Localisation;

public interface LocalisationRepository  extends JpaRepository<Localisation, Long> {
}
