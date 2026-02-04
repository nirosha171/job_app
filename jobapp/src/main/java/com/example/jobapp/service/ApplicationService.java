package com.example.jobapp.service;

import org.springframework.stereotype.Service;

import com.example.jobapp.model.JobApplication;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class ApplicationService {

    private final List<JobApplication> applications = new ArrayList<>();

    public String apply(JobApplication application) {
        if (application == null) {
            return "Invalid Application";
        }
        application.setStatus("Applied");
        applications.add(application);
        return "Job Applied Successfully";
    }

    public List<JobApplication> getApplications() {
        return Collections.unmodifiableList(applications);
    }

    public List<JobApplication> getApplicationsByStudentId(int studentId) {
        List<JobApplication> result = new ArrayList<>();
        for (JobApplication app : applications) {
            if (app.getStudentId() == studentId) {
                result.add(app);
            }
        }
        return result;
    }
}
