package com.matheusferro.santander.backend.controllers;

import com.matheusferro.santander.backend.dto.CollaboratorDTO;
import com.matheusferro.santander.backend.entities.Collaborator;
import com.matheusferro.santander.backend.services.AddressService;
import com.matheusferro.santander.backend.services.CollaboratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class CollaboratorController {

    @Autowired
    private CollaboratorService collaboratorService;

    @Autowired
    private AddressService addressService;

    @PostMapping(value = "/collaborator")
    public ResponseEntity<CollaboratorDTO> add(@RequestBody @Valid Collaborator collaborator) {
        addressService.add(collaborator.getAddress());
        CollaboratorDTO result = collaboratorService.add(collaborator);
        return ResponseEntity.ok(result);
    }

    @PutMapping("/collaborator/{id}")
    public ResponseEntity<CollaboratorDTO> edit(@PathVariable("id") Long id, @RequestBody @Valid Collaborator collaboratorUpdated) {
        CollaboratorDTO result = collaboratorService.edit(id, collaboratorUpdated);
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/collaborator/{id}")
    public ResponseEntity<CollaboratorDTO> findById(@PathVariable("id") Long id) {
        CollaboratorDTO result = collaboratorService.findById(id);
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/collaborators")
    public ResponseEntity<Page<CollaboratorDTO>> findAll(Pageable pageable) {
        Page<CollaboratorDTO> results = collaboratorService.findAll(pageable);
        return ResponseEntity.ok(results);
    }

    @GetMapping(value = "/collaborators-by-name")
    public ResponseEntity<Page<CollaboratorDTO>> findCollaboratorByName(Pageable pageable, @RequestParam(defaultValue = "") String name) {
        Page<CollaboratorDTO> results = collaboratorService.findCollaboratorByName(pageable, name);
        return ResponseEntity.ok(results);
    }
}
