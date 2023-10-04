package com.example.GETMoney.Controller;

import com.example.GETMoney.Service.UserService;
import com.example.GETMoney.model.User;
import com.example.GETMoney.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/registerNewUser")
    public ResponseEntity<String> registerNewUser(@RequestBody User user) {
        boolean emailExistence = checkEmail(user.getEmail());
        if(!emailExistence){
            return ResponseEntity.ok("Email already exists");
        }
        else {
            userService.registerNewUser(user);
            return ResponseEntity.ok("Registered Successfully");
        }
    }

    @GetMapping("/{id}")
    public User findUserById(@PathVariable("id") String id){
        return userService.findUserById(id);
    }
    @GetMapping("/allUsers")
    public List<User> getAllUsers()
    {
        return userService.getAllUsers();
    }

    @GetMapping("/getIdByEmail/{email}")
    public String getIdByEmail(@PathVariable String email){
        return userService.getIdByEmail(email);
    }

    @GetMapping("/checkEmail/{email}")
    public boolean checkEmail(@PathVariable String email){
        boolean emailExists = userService.checkEmail(email);
        return !emailExists;
    }

    @PostMapping("/loginUser")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        boolean emailExists = checkEmail(user.getEmail());
        if (emailExists) {
            return ResponseEntity.ok("Email not found");
        }
        User existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("Login Successful");
        } else {
            return ResponseEntity.ok("Invalid password");
        }
    }

    @PatchMapping("/{id}/updateUserDetails")
    public User updateUserDetails(@PathVariable String id, @RequestBody User user){
        return userService.updateUserDetails(id, user);
    }
}
