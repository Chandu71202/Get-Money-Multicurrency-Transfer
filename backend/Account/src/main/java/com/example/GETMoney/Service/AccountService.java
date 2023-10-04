package com.example.GETMoney.Service;

import com.example.GETMoney.VO.ResponseTemplateVO;
import com.example.GETMoney.VO.User;
import com.example.GETMoney.model.Account;
import com.example.GETMoney.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private RestTemplate restTemplate;

    public void createNewAccount(Account account) {
        accountRepository.save(account);
    }

    public Account findUserById(String id) {
        Account existingAccount = accountRepository.findById(id).orElse(null);
        return existingAccount;
    }
    public Long updateBalanceGBP(String id, Long amount) {
        Account account = accountRepository.findById(id).orElse(null);
        if(account!=null){
            account.setBalanceGBP(amount);
            return accountRepository.save(account).getBalanceGBP();
        }
        return null;
    }

    public Long updateBalanceUSD(String id, Long amount) {
        Account account = accountRepository.findById(id).orElse(null);
        if(account!=null){
            account.setBalanceUSD(amount);
            return accountRepository.save(account).getBalanceUSD();
        }
        return null;
    }

    public Long updateBalanceEUR(String id, Long amount) {
        Account account = accountRepository.findById(id).orElse(null);
        if(account!=null){
            account.setBalanceEUR(amount);
            return accountRepository.save(account).getBalanceEUR();
        }
        return null;
    }

    public String updateTransaction(String id, ArrayList<String> transaction) {
        Account account = accountRepository.findById(id).orElse(null);
        if(account!=null){
            ArrayList<ArrayList<String>> transactionHistory = account.getTransactionHistory();
            transactionHistory.add(transaction);
            account.setTransactionHistory(transactionHistory);
            accountRepository.save(account);
            return "Added New Transaction Successfully";
        }
        return null;
    }
    public ArrayList<Long> findAllAccountNumbers() {
        List<Account> allAccounts = accountRepository.findAll();
        return allAccounts.stream()
                .map(Account::getAccountNumber)
                .collect(Collectors.toCollection(ArrayList::new));
    }


    public ResponseTemplateVO getUserWithAccount(String id) {
        ResponseTemplateVO vo = new ResponseTemplateVO();
        Account account = accountRepository.findById(id).orElse(null);
        vo.setAccount(account);
        vo.setUser(restTemplate.getForObject("http://USER-SERVICE/users/"+id,
                User.class));
        return vo;
    }


    public Account updateAccountDetails(String id, Account account) {
        Account existingAccount = accountRepository.findById(id).orElse(null);
        existingAccount.setDateOfBirth(account.getDateOfBirth());
        existingAccount.setGender(account.getGender());
        existingAccount.setAlternateEmailId(account.getAlternateEmailId());
        existingAccount.setAddress(account.getAddress());
        existingAccount.setCity(account.getCity());
        existingAccount.setState(account.getState());
        existingAccount.setCountry(account.getCountry());
        return accountRepository.save(existingAccount);
    }
}
