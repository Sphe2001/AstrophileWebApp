package com.AstrophileWeb.backend.service;

import com.AstrophileWeb.backend.model.ClientServices;
import com.AstrophileWeb.backend.repositories.ClientServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceService {

    @Autowired
    private ClientServicesRepository clientServicesRepository;

    public List<ClientServices> findAll() {
        return clientServicesRepository.findAll();
    }

    public Optional<ClientServices> findById(Integer id) {
        return clientServicesRepository.findById(id);
    }

    public ClientServices save(ClientServices clientServices) {
        return clientServicesRepository.save(clientServices);
    }

    public void deleteById(Integer id) {
        clientServicesRepository.deleteById(id);
    }
}
