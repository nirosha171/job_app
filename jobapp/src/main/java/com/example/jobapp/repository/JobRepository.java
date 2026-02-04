package com.example.jobapp.repository;

import com.example.jobapp.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Integer> {

    // 🔥 latest 10 internships
    List<Job> findTop10ByOrderByIdDesc();
}
