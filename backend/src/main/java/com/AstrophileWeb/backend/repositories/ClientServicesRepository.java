package com.AstrophileWeb.backend.repositories;


import com.AstrophileWeb.backend.model.ClientServices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientServicesRepository extends JpaRepository<ClientServices, Integer> {
}
