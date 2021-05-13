package pl.CPMA.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pl.CPMA.core.payload.response.MessageResponse;
import pl.CPMA.main.model.ImageModel;
import pl.CPMA.main.model.User;
import pl.CPMA.main.repository.ImageRepository;
import pl.CPMA.main.repository.UserRepository;
import pl.CPMA.main.service.UserService;

import java.io.IOException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/files")
public class FilesController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Autowired
    ImageRepository imageRepository;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("myFile") MultipartFile file, @RequestParam Long id){
        try{
            if(userRepository.existsById(id)){
                User user = userService.getUserById(id);
                ImageModel img = new ImageModel( file.getOriginalFilename(),file.getContentType(),file.getBytes(), user );
                final ImageModel savedImage = imageRepository.save(img);
                user.setImageModel(savedImage);
                userRepository.save(user);

                return ResponseEntity.ok()
                        .body(new MessageResponse("Image uploaded sucessfully!"));
            }else{
                return ResponseEntity.badRequest()
                        .body(new MessageResponse("Can't find user to upload image."));
            }
        }catch (IOException e){
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Problem with image upload:"+ e.getMessage()));
        }
    }


}
