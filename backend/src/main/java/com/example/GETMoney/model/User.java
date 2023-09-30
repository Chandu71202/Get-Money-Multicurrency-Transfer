package com.example.GETMoney.model;


import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.Indexed;
import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "userDetails")
public class User {
    @Id
    private String id;
    private String name;
    private String email;
    private Long phoneNo;
    private String password;
    private String confirmPassword;
}
