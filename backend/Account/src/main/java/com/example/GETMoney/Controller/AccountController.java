package com.example.GETMoney.Controller;

import com.example.GETMoney.Service.AccountService;
import com.example.GETMoney.VO.ResponseTemplateVO;
import com.example.GETMoney.model.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/accounts")
@CrossOrigin("*")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @PostMapping("/createNewAccount")
    public ResponseEntity<String> createNewAccount(@RequestBody Account account) {
        accountService.createNewAccount(account);
        return ResponseEntity.ok("Created Account Successfully");

    }

    @GetMapping("/findUserById/{id}")
    public Account findUserById(@PathVariable String id){
        Account existingAccount = accountService.findUserById(id);
        if(existingAccount!=null)
        {
            return existingAccount;
        }
        return null;
    }
    @PutMapping("/{id}/updateBalanceGBP")
    public Long updateBalanceGBP(@PathVariable String id,@RequestBody Map<String, Long> requestData){
        Long amount = requestData.get("balanceGBP");
        return accountService.updateBalanceGBP(id,amount);
    }
    @PutMapping("/{id}/updateBalanceUSD")
    public Long updateBalanceUSD(@PathVariable String id,@RequestBody Map<String, Long> requestData){
        Long amount = requestData.get("balanceUSD");
        return accountService.updateBalanceUSD(id,amount);
    }
    @PutMapping("/{id}/updateBalanceEUR")
    public Long updateBalanceEUR(@PathVariable String id,@RequestBody Map<String, Long> requestData){
        Long amount = requestData.get("balanceEUR");
        return accountService.updateBalanceEUR(id,amount);
    }

    @PutMapping("/{id}/addTransaction")
    public String updateTransaction (@PathVariable String id,@RequestBody Map<String, ArrayList<String>> newTransactionData){
        ArrayList<String> transaction = newTransactionData.get("transaction");
        return accountService.updateTransaction(id,transaction);
    }


    @GetMapping("/joinUserAndAccount/{id}")
    public ResponseTemplateVO getUserWithAccount(@PathVariable("id") String id){
        return accountService.getUserWithAccount(id);
    }



}
