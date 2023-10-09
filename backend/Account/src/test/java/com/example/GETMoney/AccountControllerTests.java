package com.example.GETMoney.Controller;

import com.example.GETMoney.Controller.AccountController;
import com.example.GETMoney.Service.AccountService;
import com.example.GETMoney.VO.ResponseTemplateVO;
import com.example.GETMoney.model.Account;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Collections;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AccountControllerTests {

    @InjectMocks
    AccountController accountController;

    @Mock
    AccountService accountService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testCreateNewAccount() {
        Account account = new Account();
        account.setId("1");

        doNothing().when(accountService).createNewAccount(account);

        ResponseEntity<String> response = accountController.createNewAccount(account);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Created Account Successfully", response.getBody());
    }

    @Test
    void testFindUserById() {
        Account account = new Account();
        account.setId("1");

        when(accountService.findUserById("1")).thenReturn(account);

        Account foundAccount = accountController.findUserById("1");

        assertEquals(account, foundAccount);
    }

    @Test
    void testUpdateBalanceGBP() {
        String id = "1";
        Long amount = 1000L;

        when(accountService.updateBalanceGBP(id, amount)).thenReturn(amount);

        Long updatedBalance = accountController.updateBalanceGBP(id, Collections.singletonMap("balanceGBP", amount));

        assertEquals(amount, updatedBalance);
    }

    @Test
    void testUpdateBalanceUSD() {
        String id = "1";
        Long amount = 2000L;

        when(accountService.updateBalanceUSD(id, amount)).thenReturn(amount);

        Long updatedBalance = accountController.updateBalanceUSD(id, Collections.singletonMap("balanceUSD", amount));

        assertEquals(amount, updatedBalance);
    }

    @Test
    void testUpdateBalanceEUR() {
        String id = "1";
        Long amount = 500L;

        when(accountService.updateBalanceEUR(id, amount)).thenReturn(amount);

        Long updatedBalance = accountController.updateBalanceEUR(id, Collections.singletonMap("balanceEUR", amount));

        assertEquals(amount, updatedBalance);
    }

    @Test
    void testUpdateTransaction() {
        String id = "1";
        ArrayList<String> transaction = new ArrayList<>();
        transaction.add("Transaction 1");

        // Use a generic wildcard for the request parameter
        when(accountService.updateTransaction(eq(id), any())).thenReturn("Added New Transaction Successfully");

        String response = accountController.updateTransaction(id, Collections.singletonMap("transaction", transaction));

        assertEquals("Added New Transaction Successfully", response);
    }





    @Test
    void testUpdateBalanceSameAccount() {
        String id = "1";
        Account account = new Account();
        account.setBalanceGBP(1000L);
        account.setBalanceUSD(2000L);
        account.setBalanceEUR(500L);

        Map<String, Long> requestData = new HashMap<>();
        requestData.put("balanceGBP", 2000L);
        requestData.put("balanceUSD", 3000L);
        requestData.put("balanceEUR", 1000L);

        when(accountService.updateBalanceGBP(id, requestData.get("balanceGBP"))).thenReturn(requestData.get("balanceGBP"));
        when(accountService.updateBalanceUSD(id, requestData.get("balanceUSD"))).thenReturn(requestData.get("balanceUSD"));
        when(accountService.updateBalanceEUR(id, requestData.get("balanceEUR"))).thenReturn(requestData.get("balanceEUR"));

        String response = accountController.updateBalanceSameAccount(id, account);

        assertEquals("Transfer Successful", response);
    }


    @Test
    void testFindAllAccountNumbers() {
        ArrayList<Long> accountNumbers = new ArrayList<>();
        accountNumbers.add(1L);
        accountNumbers.add(2L);

        when(accountService.findAllAccountNumbers()).thenReturn(accountNumbers);

        List<Long> response = accountController.findAllAccountNumbers();

        assertEquals(accountNumbers, response);
    }

    @Test
    void testGetUserWithAccount() {
        String id = "1";
        Account account = new Account();
        account.setId("1");

        ResponseTemplateVO vo = new ResponseTemplateVO();
        vo.setAccount(account);

        when(accountService.getUserWithAccount(id)).thenReturn(vo);

        ResponseTemplateVO response = accountController.getUserWithAccount(id);

        assertEquals(vo, response);
    }

    @Test
    void testUpdateAccountDetails() {
        String id = "1";
        Account account = new Account();
        account.setId("1");

        when(accountService.updateAccountDetails(id, account)).thenReturn(account);

        Account response = accountController.updateAccountDetails(id, account);

        assertEquals(account, response);
    }
}