package com.example.jobapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.jobapp.model.JobApplication;
import com.example.jobapp.service.ApplicationService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/applications")   // group endpoints under /api/applications
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @PostMapping("/apply")
    public String apply(@RequestBody JobApplication application) {
        return applicationService.apply(application);
    }

    @GetMapping
    public List<JobApplication> getApplications() {
        return applicationService.getApplications();
    }
}
