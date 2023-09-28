package com.example.GETMoney;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class GetMoneyApplication {

	public static void main(String[] args) {
		SpringApplication.run(GetMoneyApplication.class, args);
	}

}
