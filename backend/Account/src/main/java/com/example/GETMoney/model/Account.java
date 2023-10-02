package com.example.GETMoney.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.ArrayList;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Document(collection = "accountDetails")
public class Account {
    @Id
    private String id;
    private String dateOfBirth;
    private String gender;
    private String alternateEmailId;
    private String address;
    private String city;
    private String state;
    private String country;
    private Long accountNumber;
    private Long balanceGBP;
    private Long balanceUSD;
    private Long balanceEUR;
    private ArrayList<String> transactionHistory = new ArrayList<>();;
}



//
//    private String id;
//    private String name;
//    private String email;
//    private Long phoneNo;
//    private String password;
