package pl.CPMA.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.CPMA.core.payload.response.MessageResponse;
import pl.CPMA.core.security.JWT.JWTUtils;
import pl.CPMA.main.model.ImageModel;
import pl.CPMA.main.model.User;
import pl.CPMA.main.model.UserSettings;
import pl.CPMA.main.model.request.PasswordChangeRequest;
import pl.CPMA.main.model.request.RegisterRequest;
import pl.CPMA.main.model.request.UpdateRequest;
import pl.CPMA.main.repository.ImageRepository;
import pl.CPMA.main.repository.UserRepository;
import pl.CPMA.main.repository.UserSettingsRepository;
import pl.CPMA.main.service.RoleService;
import pl.CPMA.main.service.UserService;
import pl.CPMA.main.utils.ImageUtil;
import pl.CPMA.main.utils.PDFGenerator;

import javax.validation.Valid;
import java.io.ByteArrayInputStream;
import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    UserSettingsRepository userSettingsRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JWTUtils jwtUtils;

    @Autowired
    UserService userService;

    @Autowired
    RoleService roleService;

    @GetMapping("/getUser")
    public ResponseEntity<?> getUser(@RequestParam Long id) {
        if (userRepository.existsById(id)) {
            User user = userService.getUserById(id);
            return ResponseEntity.ok().body(user);
        } else {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("User with that ID not found."));
        }
    }

    @GetMapping("/getAll")
    public Page<User> getAllUsers(@RequestParam(name = "page", defaultValue = "0") int page,
                                         @RequestParam(name = "size", defaultValue = "10") int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<User> pageResult = userRepository.findAllByOrderByIdAsc(pageRequest);
        List<User> users = pageResult
                .stream()
                .collect(Collectors.toList());

        return new PageImpl<>(users, pageRequest, pageResult.getTotalElements());
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
        if (userRepository.existsByUsername(registerRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken."));
        }

        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use."));
        }

        User user = new User(registerRequest.getUsername(),
                registerRequest.getEmail(),
                encoder.encode(registerRequest.getPassword()),
                registerRequest.getName(),
                registerRequest.getSurname(),
                registerRequest.getPhone());

        user.setRoles(roleService.addRoles(registerRequest));
        user.setDraft(false);
        userRepository.save(user);

        ImageModel imageModel = new ImageModel();
        imageModel.setName("avatar.png");
        imageModel.setType("image/png");
        imageModel.setPic(ImageUtil.getImageBytes());
        imageModel.setUser(user);
        imageRepository.save(imageModel);

        user.setImageModel(imageModel);
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteUser(@RequestParam Long id) {
        if (userRepository.existsById(id)) {
            userService.delete(id);
            return ResponseEntity.ok(new MessageResponse("User deleted successfully!"));
        } else {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("User with that ID not found."));
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@Valid @RequestBody UpdateRequest updateRequest) {
        User dbUser = userRepository.findByUsername(updateRequest.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("Can't find username: " + updateRequest.getUsername()));

        if (dbUser == null)
            return ResponseEntity.badRequest()
                    .body(new MessageResponse(("User with that username not found")));


        dbUser.setName(updateRequest.getName());
        dbUser.setSurname(updateRequest.getSurname());
        dbUser.setEmail(updateRequest.getEmail());
        dbUser.setPhone(updateRequest.getPhone());

        dbUser.setRoles(roleService.addRoles(updateRequest));

        userRepository.save(dbUser);

        return ResponseEntity.ok(new MessageResponse("User updated successfully!"));
    }

    @PutMapping("/changePassword")
    public ResponseEntity<?> changePassword(@Valid @RequestBody PasswordChangeRequest passwordChangeRequest) {
        User dbUser = userRepository.findByUsername(passwordChangeRequest.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("Can't find username: " + passwordChangeRequest.getUsername()));

        if (dbUser == null)
            return ResponseEntity.badRequest()
                    .body(new MessageResponse(("User with that username not found")));


        dbUser.setPassword(encoder.encode(passwordChangeRequest.getPassword()));

        userRepository.save(dbUser);

        return ResponseEntity.ok(new MessageResponse("Password changed successfully!"));
    }

    @PutMapping("/updateSettings")
    public ResponseEntity<?> updateSettings(@Valid @RequestBody UserSettings userSettings, @RequestParam Long id) {
        UserSettings dbUserSettings = userSettingsRepository.findByUser_Id(id);
        if (dbUserSettings == null)
            return ResponseEntity.badRequest()
                    .body(new MessageResponse(("User settings for that user not found")));

        if(!dbUserSettings.getLanguage().equals(userSettings.getLanguage()))
            dbUserSettings.setLanguage(userSettings.getLanguage());

        if(!dbUserSettings.getItems_on_page().equals(userSettings.getViewType()))
            dbUserSettings.setItems_on_page(userSettings.getItems_on_page());

        if(!dbUserSettings.getViewType().equals(userSettings.getViewType()))
            dbUserSettings.setViewType(userSettings.getViewType());

        userSettingsRepository.save(dbUserSettings);

        return ResponseEntity.ok(new MessageResponse("User settings was updated successfull!"));
    }

    @GetMapping("/getReport")
    public ResponseEntity<?> generateReport() {

        PageRequest pageRequest = PageRequest.of(0, Integer.MAX_VALUE);
        Page<User> pageResult = userRepository.findAll(pageRequest);
        List<User> users = pageResult
                .stream()
                .collect(Collectors.toList());
        ByteArrayInputStream bis = PDFGenerator.usersReport(users);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "inline; filename=users_report.pdf");

        return ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

}
