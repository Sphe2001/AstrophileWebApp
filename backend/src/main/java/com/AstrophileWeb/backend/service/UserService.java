package com.AstrophileWeb.backend.service;

import com.AstrophileWeb.backend.model.ClientServices;
import com.AstrophileWeb.backend.model.User;
import com.AstrophileWeb.backend.repositories.ClientServicesRepository;
import com.AstrophileWeb.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Integer id) {
        return userRepository.findById(id);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
    private String hashPassword(String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder.encode(password);
    }

    public  Boolean registerUser(User user) {
        if(userRepository.findByEmail(user.getEmail()) != null) {
            return false;
        }else {
            user.setFirstname(user.getFirstname());
            user.setLastname(user.getLastname());
            user.setEmail(user.getEmail());
            String pass = hashPassword(user.getPassword());
            user.setPassword(pass);

            userRepository.save(user);
            return true;
        }
    }

    public Boolean loginUser(User user) {
        User client = userRepository.findByEmail(user.getEmail());
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        boolean matches = false;
        matches = encoder.matches(user.getPassword(), client.getPassword());

        if(client != null && matches) {

            return true;
        } else {
            return false;
        }
    }
}

