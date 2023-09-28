package com.example.GETMoney.Controller;

import com.example.GETMoney.model.Users;
import com.example.GETMoney.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/addUser")
    public String saveUser(@RequestBody Users user){
        userRepository.save(user);
        return "User Saved" + user.getName();
    }

}
