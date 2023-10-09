package com.example.GETMoney.Controller;

import com.example.GETMoney.Controller.UserController;
import com.example.GETMoney.Service.UserService;
import com.example.GETMoney.model.User;
import com.example.GETMoney.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserControllerTests {

    @InjectMocks
    private UserController userController;

    @Mock
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }



    @Test
    void testRegisterNewUser_EmailExists() {
        User user = new User();
        user.setName("existinguser");
        user.setEmail("existing@example.com");
        user.setPassword("password");

        when(userService.checkEmail(user.getEmail())).thenReturn(false);

        ResponseEntity<String> response = userController.registerNewUser(user);

        assertEquals("Registered Successfully", response.getBody());
    }

    @Test
    void testFindUserById() {
        User user = new User();
        user.setId("1");
        user.setName("testuser");
        user.setEmail("test@example.com");
        user.setPassword("password");

        when(userService.findUserById("1")).thenReturn(user);

        User foundUser = userController.findUserById("1");

        assertEquals("testuser", foundUser.getName());
    }

    @Test
    void testGetAllUsers() {
        List<User> userList = new ArrayList<>();
        userList.add(new User("1", "user1", "user1@example.com", 1234567890L, "password1"));
        userList.add(new User("2", "user2", "user2@example.com", 9876543210L, "password2"));

        when(userService.getAllUsers()).thenReturn(userList);

        List<User> allUsers = userController.getAllUsers();

        assertEquals(2, allUsers.size());
        assertEquals("user1", allUsers.get(0).getName());
    }

    @Test
    void testGetIdByEmail() {
        when(userService.getIdByEmail("test@example.com")).thenReturn("1");

        String userId = userController.getIdByEmail("test@example.com");

        assertEquals("1", userId);
    }

    @Test
    void testCheckEmail_NotExists() {
        when(userService.checkEmail("test@example.com")).thenReturn(true);

        boolean emailExists = userController.checkEmail("test@example.com");

        assertFalse(emailExists);
    }

    @Test
    void testCheckEmail_Exists() {
        when(userService.checkEmail("existing@example.com")).thenReturn(false);

        boolean emailExists = userController.checkEmail("existing@example.com");

        assertTrue(emailExists);
    }

    @Test
    void testLoginUser_Success() {
        User user = new User();
        user.setName("testuser");
        user.setEmail("test@example.com");
        user.setPassword("password");

        when(userService.checkEmail(user.getEmail())).thenReturn(false);
        when(userRepository.findByEmail(user.getEmail())).thenReturn(user);

        ResponseEntity<String> response = userController.loginUser(user);

        assertEquals("Email not found", response.getBody());
    }

    @Test
    void testLoginUser_EmailNotFound() {
        User user = new User();
        user.setName("testuser");
        user.setEmail("test@example.com");
        user.setPassword("password");

        when(userService.checkEmail(user.getEmail())).thenReturn(true);

        ResponseEntity<String> response = userController.loginUser(user);

        assertEquals("Invalid password", response.getBody());
    }

    @Test
    void testLoginUser_InvalidPassword() {
        User user = new User();
        user.setName("testuser");
        user.setEmail("test@example.com");
        user.setPassword("password");

        when(userService.checkEmail(user.getEmail())).thenReturn(false);
        when(userRepository.findByEmail(user.getEmail())).thenReturn(user);

        user.setPassword("wrongpassword");

        ResponseEntity<String> response = userController.loginUser(user);

        assertEquals("Email not found", response.getBody());
    }

    @Test
    void testUpdateUserDetails() {
        User user = new User();
        user.setId("1");
        user.setName("testuser");
        user.setEmail("test@example.com");
        user.setPassword("password");

        when(userService.updateUserDetails("1", user)).thenReturn(user);

        User updatedUser = userController.updateUserDetails("1", user);

        assertEquals("testuser", updatedUser.getName());
    }
}
