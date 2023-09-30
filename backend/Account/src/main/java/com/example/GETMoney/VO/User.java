package com.example.GETMoney.VO;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private String id;
    private String name;
    private String email;
    private Long phoneNo;
    private String password;
}
