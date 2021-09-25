package com.matheusferro.santander.backend.services.impl;

import com.matheusferro.santander.backend.dto.CollaboratorDTO;
import com.matheusferro.santander.backend.entities.Collaborator;
import com.matheusferro.santander.backend.repositories.AddressRepository;
import com.matheusferro.santander.backend.repositories.CollaboratorRepository;
import com.matheusferro.santander.backend.services.CollaboratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class CollaboratorServiceImpl implements CollaboratorService {

    @Autowired
    private CollaboratorRepository collaboratorRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public CollaboratorDTO add(Collaborator collaborator) {
        collaboratorRepository.save(collaborator);
        return new CollaboratorDTO(collaborator);
    }

    @Override
    public CollaboratorDTO edit(Long id, Collaborator collaboratorUpdated) {
        return collaboratorRepository.findById(id).map(collaborator -> {
            collaboratorUpdated.setCreatedAt(collaborator.getCreatedAt());
            collaboratorUpdated.setId(collaborator.getId());

            addressRepository.findById(collaborator.getId()).map(address -> {
                collaboratorUpdated.getAddress().setId(collaborator.getAddress().getId());
                return addressRepository.save(collaboratorUpdated.getAddress());
            });

            collaboratorRepository.save(collaboratorUpdated);
            return new CollaboratorDTO(collaborator);
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Collaborator not found"));
    }

    @Override
    public Page<CollaboratorDTO> findCollaboratorByName(Pageable pageable, String name) {
        return collaboratorRepository.findByNameContainingIgnoreCase(pageable, name).map(CollaboratorDTO::new);
    }

    @Override
    public Page<CollaboratorDTO> findAll(Pageable pageable) {
        return collaboratorRepository.findAll(pageable).map(CollaboratorDTO::new);
    }

    @Override
    public CollaboratorDTO findById(Long id) {
        Collaborator collaborator = collaboratorRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return new CollaboratorDTO(collaborator);
    }

    @Override
    public void deleteById(Long id) {
        collaboratorRepository.deleteById(id);
    }
}
