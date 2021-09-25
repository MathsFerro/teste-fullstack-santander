package com.matheusferro.santander.backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.matheusferro.santander.backend.entities.Address;
import com.matheusferro.santander.backend.entities.Collaborator;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class CollaboratorDTO {

    private Long id;
    private String name;
    private String lastName;
    private String role;
    private Address address;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate birthDate;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private LocalDateTime createdAt;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private LocalDateTime updatedAt;

    public CollaboratorDTO(Collaborator collaborator) {
        this.id = collaborator.getId();
        this.name = collaborator.getName();
        this.lastName = collaborator.getLastName();
        this.role = collaborator.getRole();
        this.birthDate = collaborator.getBirthDate();
        this.createdAt = collaborator.getCreatedAt();
        this.updatedAt = collaborator.getUpdatedAt();
        this.address = collaborator.getAddress();
    }

    public CollaboratorDTO() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
