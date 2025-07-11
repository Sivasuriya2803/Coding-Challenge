package com.hexa.task.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexa.task.exception.TaskNotFoundException;
import com.hexa.task.model.Task;
import com.hexa.task.service.TaskService;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

	@Autowired
    private TaskService taskService;
	

	
	@GetMapping("/getAllTasks")
	public List<Task> getAllTasks() {
	    return taskService.getAllTasks();
	}
	 @GetMapping(value="/getTaskById/{taskId}")
	 @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_ADMIN')")
	 public ResponseEntity<Task> getTaskById(@PathVariable int taskId) throws TaskNotFoundException {
	        return taskService.getTaskById(taskId);
	    }
	 @PostMapping(value = "/createTask")
	    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
	    public ResponseEntity<Task> createTask(@RequestBody Task task) {
	        return taskService.createTask(task);
	    }
	 @PutMapping("/updateTask/{taskId}")
	 @PreAuthorize("hasAuthority('ROLE_ADMIN')")
	 public ResponseEntity<String> updateTask(@PathVariable int taskId, @RequestBody Task task) throws TaskNotFoundException {
		 return taskService.updateTask(taskId, task);
	 }
	 @DeleteMapping("/deleteTask/{taskId}")
	 @PreAuthorize("hasAuthority('ROLE_ADMIN')")
	 public ResponseEntity<String> deleteTask(@PathVariable int taskId) throws TaskNotFoundException {
	     return taskService.deleteTask(taskId);
	 }
	 
	 

}
