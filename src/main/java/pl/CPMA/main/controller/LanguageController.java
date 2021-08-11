package pl.CPMA.main.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.CPMA.main.model.enums.Languages;

import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/languages")
public class LanguageController {

    @GetMapping
    public ResponseEntity<List<Languages>> getLanguages() {
        return ResponseEntity.ok(Arrays.asList(Languages.values()));
    }

}
