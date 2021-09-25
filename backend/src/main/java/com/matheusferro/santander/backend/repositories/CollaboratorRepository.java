package com.matheusferro.santander.backend.repositories;

import com.matheusferro.santander.backend.entities.Collaborator;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CollaboratorRepository extends JpaRepository<Collaborator, Long> {

    Page<Collaborator> findByNameContainingIgnoreCase(Pageable pageable, String name);

}
