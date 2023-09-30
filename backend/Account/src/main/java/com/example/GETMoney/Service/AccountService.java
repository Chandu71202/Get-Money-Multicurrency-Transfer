package com.example.GETMoney.Service;

import com.example.GETMoney.VO.ResponseTemplateVO;
import com.example.GETMoney.VO.User;
import com.example.GETMoney.model.Account;
import com.example.GETMoney.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private RestTemplate restTemplate;

    public void createNewAccount(Account account) {
        accountRepository.save(account);
    }

    public String findUserById(String id) {
        Account existingAccount = accountRepository.findById(id).orElse(null);
        if(existingAccount!=null){
            return existingAccount.getId();
        }
        return null;
    }

    public ResponseTemplateVO getUserWithAccount(String id) {
        ResponseTemplateVO vo = new ResponseTemplateVO();
        Account account = accountRepository.findById(id).orElse(null);
        vo.setAccount(account);
        vo.setUser(restTemplate.getForObject("http://USER-SERVICE/users/"+id,
                User.class));
        return vo;
    }
}
