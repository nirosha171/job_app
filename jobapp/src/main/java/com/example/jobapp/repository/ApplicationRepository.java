package com.example.jobapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.jobapp.model.JobApplication;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.jobapp.model.JobApplication;

public interface ApplicationRepository
        extends JpaRepository<JobApplication, Integer> {
}
