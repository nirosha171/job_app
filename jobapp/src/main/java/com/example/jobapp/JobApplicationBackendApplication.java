package com.example.jobapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.jobapp.model.JobApplication;

@SpringBootApplication
public class JobApplicationBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(JobApplicationBackendApplication.class, args);
        System.out.println("Job Application Backend Started...");
    }
    public String apply(JobApplication application) {
        return null;
    }

}
