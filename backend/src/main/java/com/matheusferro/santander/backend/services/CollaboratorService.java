package com.matheusferro.santander.backend.services;

import com.matheusferro.santander.backend.dto.CollaboratorDTO;
import com.matheusferro.santander.backend.entities.Collaborator;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CollaboratorService {

    CollaboratorDTO add(Collaborator collaborator);
    CollaboratorDTO edit(Long id, Collaborator collaboratorUpdated);
    Page<CollaboratorDTO> findCollaboratorByName(Pageable pageable, String name);
    Page<CollaboratorDTO> findAll(Pageable pageable);
    CollaboratorDTO findById(Long id);

}
