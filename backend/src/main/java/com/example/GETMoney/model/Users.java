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
@Document(collection = "Users")

public class Users {
    @Id
    private String name;
    private String email;
    private String phone_no;
    private String password;
    private String confirm_password;
}
