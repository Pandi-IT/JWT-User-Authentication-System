package com.example.auth.service;

import com.example.auth.model.User;
import com.example.auth.repository.UserRepository;
import com.example.auth.security.JwtUtil;
import com.example.auth.dto.UserDTO;
import com.example.auth.dto.ResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired private UserRepository userRepository;
    @Autowired private JwtUtil jwtUtil;
    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public ResponseDTO register(UserDTO userDTO) {
        Optional<User> existing = userRepository.findByEmail(userDTO.getEmail());
        if (existing.isPresent()) return new ResponseDTO("Email already exists", null);

        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setPassword(encoder.encode(userDTO.getPassword()));
        userRepository.save(user);

        return new ResponseDTO("User registered successfully", null);
    }

    public ResponseDTO login(UserDTO userDTO) {
        Optional<User> existing = userRepository.findByEmail(userDTO.getEmail());
        if (existing.isEmpty() || !encoder.matches(userDTO.getPassword(), existing.get().getPassword()))
            return new ResponseDTO("Invalid credentials", null);

        String token = jwtUtil.generateToken(existing.get().getEmail());
        return new ResponseDTO("Login successful", token);
    }
}
