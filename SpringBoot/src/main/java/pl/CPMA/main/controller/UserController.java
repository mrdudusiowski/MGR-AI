package pl.CPMA.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
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
import pl.CPMA.main.model.request.PasswordChangeRequest;
import pl.CPMA.main.model.request.RegisterRequest;
import pl.CPMA.main.model.request.UpdateRequest;
import pl.CPMA.main.repository.ImageRepository;
import pl.CPMA.main.repository.UserRepository;
import pl.CPMA.main.service.RoleService;
import pl.CPMA.main.service.UserService;
import pl.CPMA.main.utils.ImageUtil;
import pl.CPMA.main.utils.PDFGenerator;

import javax.validation.Valid;
import java.io.ByteArrayInputStream;
import java.util.List;


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
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAllByOrderByIdAsc());
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

    @GetMapping("/getReport")
    public ResponseEntity<?> generateReport() {

        List<User> users = userRepository.findAll();

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
