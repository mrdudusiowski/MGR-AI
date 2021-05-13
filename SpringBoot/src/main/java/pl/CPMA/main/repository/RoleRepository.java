package pl.CPMA.main.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.CPMA.main.model.Role;
import pl.CPMA.main.model.enums.RoleTypes;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(RoleTypes name);
}
