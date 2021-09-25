package com.matheusferro.santander.backend.services.impl;

import com.matheusferro.santander.backend.entities.Address;
import com.matheusferro.santander.backend.repositories.AddressRepository;
import com.matheusferro.santander.backend.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressServiceImp implements AddressService {

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public Address add(Address address) {
        return addressRepository.save(address);
    }
}
