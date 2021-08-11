package pl.CPMA.main.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.CPMA.main.model.enums.ViewType;

import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/viewTypes")
public class ViewTypeController {

    @GetMapping
    public ResponseEntity<List<ViewType>> getViewTypes() {
        return ResponseEntity.ok(Arrays.asList(ViewType.values()));
    }

}
