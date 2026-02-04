package com.example.jobapp.service;

import org.springframework.stereotype.Service;

import com.example.jobapp.model.User;
import com.example.jobapp.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String signup(User user) {

        // email already exists?
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return "User already exists";
        }

        userRepository.save(user);   // ✅ DATABASE SAVE
        return "Signup successful";
    }

    public String login(String email, String password) {

        User user = userRepository.findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
            return "Login successful";
        }

        return "Invalid Credentials";
    }
}
