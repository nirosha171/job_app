package com.example.jobapp.service;

import com.example.jobapp.model.JobApplication;
import com.example.jobapp.repository.ApplicationRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ApplicationService {

    private final ApplicationRepository repository;

    public ApplicationService(ApplicationRepository repository) {
        this.repository = repository;
    }

    public void apply(JobApplication application) {
        repository.save(application);  // ✅ must save to DB
    }

    public List<JobApplication> getApplications() {
        return repository.findAll();
    }
}
