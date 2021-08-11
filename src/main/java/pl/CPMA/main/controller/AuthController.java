package pl.CPMA.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.CPMA.core.payload.request.LoginRequest;
import pl.CPMA.core.payload.request.SignupRequest;
import pl.CPMA.core.payload.response.JWTResponse;
import pl.CPMA.core.payload.response.MessageResponse;
import pl.CPMA.core.security.JWT.JWTUtils;
import pl.CPMA.core.security.services.UserDetails;
import pl.CPMA.main.model.Role;
import pl.CPMA.main.model.User;
import pl.CPMA.main.model.UserSettings;
import pl.CPMA.main.model.enums.RoleTypes;
import pl.CPMA.main.repository.RoleRepository;
import pl.CPMA.main.repository.UserRepository;
import pl.CPMA.main.repository.UserSettingsRepository;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	UserSettingsRepository userSettingsRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JWTUtils jwtUtils;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		UserSettings userSettings = userSettingsRepository.findByUser_Id(userDetails.getId());

		return ResponseEntity.ok(new JWTResponse(jwt,
												 userDetails.getId(),
												 userDetails.getName(),
												 userDetails.getSurname(),
												 userDetails.getUsername(), 
												 userDetails.getEmail(),
												 userDetails.getPhone(),
												 roles,
												 userSettings));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Username is already taken."));
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Email is already in use."));
		}

		User user = new User(signUpRequest.getUsername(),
				signUpRequest.getEmail(),
				encoder.encode(signUpRequest.getPassword()), signUpRequest.getName(), signUpRequest.getSurname(), signUpRequest.getPhone());

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(RoleTypes.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Role is not found."));
			Role androidRole = roleRepository.findByName(RoleTypes.ROLE_ANDROID_USER)
					.orElseThrow(() -> new RuntimeException("Role is not found."));
			roles.add(userRole);
			roles.add(androidRole);
		}

		user.setRoles(roles);
		user.setDraft(false);
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}

}
