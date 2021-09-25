package com.matheusferro.santander.backend.repositories;

import com.matheusferro.santander.backend.entities.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
