package com.example.jobapp.controller;

import com.example.jobapp.model.Job;
import com.example.jobapp.service.JobService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:5173")
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

   
    @GetMapping
    public List<Job> getLatestJobs() {
        return jobService.getLatestJobs();
    }

   
    @GetMapping("/{id}")
    public Job getJob(@PathVariable int id) {
        return jobService.getJobById(id);
    }
}
