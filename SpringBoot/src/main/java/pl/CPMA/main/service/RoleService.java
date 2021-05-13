package pl.CPMA.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pl.CPMA.main.model.Role;
import pl.CPMA.main.model.request.RegisterRequest;
import pl.CPMA.main.model.request.UpdateRequest;
import pl.CPMA.main.repository.RoleRepository;
import pl.CPMA.main.model.enums.RoleTypes;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@Component
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public Set<Role> addRoles(@Valid UpdateRequest user){
        Set<Role> roles = new HashSet<>();

        Role userRole = roleRepository.findByName(RoleTypes.ROLE_USER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        Role androidRole = roleRepository.findByName(RoleTypes.ROLE_ANDROID_USER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));

        roles.add(userRole);
        roles.add(androidRole);
        
        if(user.isAdmin()){
            Role adminRole = roleRepository.findByName(RoleTypes.ROLE_ADMIN)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(adminRole);
        }
        if(user.isMod()){
                Role modRole = roleRepository.findByName(RoleTypes.ROLE_MODERATOR)
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(modRole);
        }
        return roles;
    }

    public Set<Role> addRoles(@Valid RegisterRequest user){
        Set<Role> roles = new HashSet<>();

        Role userRole = roleRepository.findByName(RoleTypes.ROLE_USER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        Role androidRole = roleRepository.findByName(RoleTypes.ROLE_ANDROID_USER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));

        roles.add(userRole);
        roles.add(androidRole);

        if(user.isAdmin()){
            Role adminRole = roleRepository.findByName(RoleTypes.ROLE_ADMIN)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(adminRole);
        }
        if(user.isMod()){
            Role modRole = roleRepository.findByName(RoleTypes.ROLE_MODERATOR)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(modRole);
        }
        return roles;
    }
}
