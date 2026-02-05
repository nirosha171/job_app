package com.example.jobapp.controller;

import com.example.jobapp.model.JobApplication;
import com.example.jobapp.service.ApplicationService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = "http://localhost:5173")
public class ApplicationController {

    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @PostMapping(consumes = {"multipart/form-data"})
    public String apply(
            @RequestPart("application") JobApplication application,
            @RequestPart("resumeFile") MultipartFile resumeFile) {

        try {
            String uploadDir = "C:/jobapp_uploads/";
            File dir = new File(uploadDir);
            if (!dir.exists()) dir.mkdirs();
            String filePath = uploadDir + resumeFile.getOriginalFilename();
            resumeFile.transferTo(new File(filePath));
            application.setResumeLink(filePath);
            application.setStatus("Applied");
            applicationService.apply(application);
            return "Application submitted successfully!";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error while submitting application!";
        }
    }

    @GetMapping
    public java.util.List<JobApplication> getApplications() {
        return applicationService.getApplications();
    }
}
