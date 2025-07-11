package com.hexa.task.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexa.task.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task,Integer> {
}