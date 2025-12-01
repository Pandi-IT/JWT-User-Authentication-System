package com.example.auth.controller;

import com.example.auth.dto.UserDTO;
import com.example.auth.dto.ResponseDTO;
import com.example.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired private UserService userService;

    @PostMapping("/register")
    public ResponseDTO register(@RequestBody UserDTO userDTO) {
        return userService.register(userDTO);
    }

    @PostMapping("/login")
    public ResponseDTO login(@RequestBody UserDTO userDTO) {
        return userService.login(userDTO);
    }

    @GetMapping("/dashboard")
    public ResponseDTO dashboard(@RequestAttribute("email") String email) {
        return new ResponseDTO("Welcome " + email, null);
    }
}
