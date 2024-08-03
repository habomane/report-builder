package com.reportbuilder.csv;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CsvController {

    // Example Request
    @RequestMapping("/hello")
    public String sayHi()
    {
        return "Hi!";
    }

}
