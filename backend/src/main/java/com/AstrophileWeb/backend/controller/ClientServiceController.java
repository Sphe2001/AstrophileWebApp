package com.AstrophileWeb.backend.controller;

import com.AstrophileWeb.backend.model.ClientServices;
import com.AstrophileWeb.backend.service.ClientServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/services")
public class ClientServiceController {

    @Autowired
    private ClientServiceService clientServicesService;

    @GetMapping
    public List<ClientServices> getAllServices() {
        return clientServicesService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClientServices> getServiceById(@PathVariable Integer id) {
        Optional<ClientServices> service = clientServicesService.findById(id);
        if (service.isPresent()) {
            return ResponseEntity.ok(service.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/create")
    public ClientServices createService(@RequestBody ClientServices clientServices) {
        return clientServicesService.save(clientServices);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClientServices> updateService(@PathVariable Integer id, @RequestBody ClientServices clientServices) {
        Optional<ClientServices> existingService = clientServicesService.findById(id);
        if (existingService.isPresent()) {
            clientServices.setId(id);
            return ResponseEntity.ok(clientServicesService.save(clientServices));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Integer id) {
        if (clientServicesService.findById(id).isPresent()) {
            clientServicesService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
