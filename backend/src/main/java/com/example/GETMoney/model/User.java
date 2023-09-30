package com.example.GETMoney.model;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;

@Data
@Getter
@Setter
@ToString
@Document(collection = "userDetails")
public class Users {
    @Id
    private int id;
    private String name;
    private String email;
    private Long phone_no;
    private String password;
    private String confirm_password;
}
