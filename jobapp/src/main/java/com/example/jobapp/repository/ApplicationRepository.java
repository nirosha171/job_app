package com.example.jobapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.jobapp.model.JobApplication;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<JobApplication, Integer> {
    // Custom finder method
    List<JobApplication> findByStudentId(int studentId);
}
