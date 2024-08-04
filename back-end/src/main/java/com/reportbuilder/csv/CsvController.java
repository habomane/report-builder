package com.reportbuilder.csv;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CsvController {

    // Example Request
    @RequestMapping("/hello")
    public String sayHi()
    {
        return "Hi!";
    }

    @RequestMapping(method=RequestMethod.POST, value="/csv")
    public String readCSV(@RequestBody CSV csv)
    {
        return csv.getData();
    }



}
