package com.Natwest.cloudgateway;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FallBackMethodController {

    @GetMapping("/UserServiceFallBack")
    public String userServiceFallBackMethod() {
        return "user service is taking longer than expected." +"please try again later";
    }
    @GetMapping("/AccountServiceFallBack")
    public String accountServiceFallBackMethod() {
        return "account service is taking longer than expected." +"please try again later";
    }
}
