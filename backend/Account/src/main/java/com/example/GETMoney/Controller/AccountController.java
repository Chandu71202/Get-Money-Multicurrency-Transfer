package com.example.GETMoney.Controller;

import com.example.GETMoney.Service.AccountService;
import com.example.GETMoney.VO.ResponseTemplateVO;
import com.example.GETMoney.model.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/accounts")
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @PostMapping("/createNewAccount")
    public ResponseEntity<String> createNewAccount(@RequestBody Account account) {
        accountService.createNewAccount(account);
        return ResponseEntity.ok("Created Account Successfully");

    }

    @GetMapping("/findUserById/{id}")
    public ResponseEntity<String> findUserById(@PathVariable String id){
        String existing_id = accountService.findUserById(id);
        if(existing_id!=null)
        {
            return ResponseEntity.ok("Account Exists");
        }
        return ResponseEntity.ok("No Account Exists");
    }

    @GetMapping("/joinUserAndAccount/{id}")
    public ResponseTemplateVO getUserWithAccount(@PathVariable("id") String id){
        return accountService.getUserWithAccount(id);
    }

}
