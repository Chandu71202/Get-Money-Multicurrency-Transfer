package com.example.GETMoney.Service;

import com.example.GETMoney.model.User;
import com.example.GETMoney.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void registerNewUser(User user) {
        userRepository.save(user);
    }

    public boolean checkEmail(String email) {
        User existingUser = userRepository.findByEmail(email);
        return existingUser != null;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public String getIdByEmail(String email) {
        User existingUser = userRepository.findByEmail(email);
        return existingUser.getId();
    }

    public User findUserById(String id) {
        return userRepository.findById(id).orElse(null);
    }

    public User updateUserDetails(String id, User user) {
        User existingUser = userRepository.findById(id).orElse(null);
        existingUser.setPhoneNo(user.getPhoneNo());
        existingUser.setName(user.getName());
        existingUser.setPassword(user.getPassword());
        return userRepository.save(existingUser);
    }
}
