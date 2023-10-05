package com.example.GETMoney.Controller;

import com.example.GETMoney.Service.AccountService;
import com.example.GETMoney.VO.ResponseTemplateVO;
import com.example.GETMoney.model.Account;
import com.fasterxml.jackson.core.sym.NameN;
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
    public String updateTransaction (@PathVariable String id,@RequestBody Map<String, ArrayList<String>> newTransactionData) {
        ArrayList<String> transaction = newTransactionData.get("transaction");
        return accountService.updateTransaction(id, transaction);
    }

    @PatchMapping("/{id}/updateBalanceSameAccount")
    public String  updateBalanceSameAccount(@PathVariable String id,@RequestBody Account requestData){
        Long amount;
        if(requestData.getBalanceGBP()!=null){
            amount = accountService.updateBalanceGBP(id,requestData.getBalanceGBP());
        }
        if(requestData.getBalanceUSD()!=null){
            amount = accountService.updateBalanceUSD(id,requestData.getBalanceUSD());
        }
        if(requestData.getBalanceEUR()!=null){
            amount =  accountService.updateBalanceEUR(id,requestData.getBalanceEUR());
        }
        return "Transfer Successful";
    }
    @GetMapping("/findAllAccountNumbers")
    public ArrayList<Long> findAllAccountNumbers(){
        return accountService.findAllAccountNumbers();
    }


    @GetMapping("/joinUserAndAccount/{id}")
    public ResponseTemplateVO getUserWithAccount(@PathVariable("id") String id){
        return accountService.getUserWithAccount(id);
    }

    @PatchMapping("/{id}/updateAccountDetails")
    public Account updateAccountDetails(@PathVariable String id, @RequestBody Account account){
        return accountService.updateAccountDetails(id, account);
    }



}
