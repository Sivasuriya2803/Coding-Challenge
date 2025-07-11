import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../service/task-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './show-tasks.html',
  styleUrls: ['./show-tasks.css']
})
export class ShowTasks implements OnInit {
  tasks: Task[] = [];
  errorMessage: string | null = null;

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this._taskService.getAllTasks().subscribe({
      next: (x) => this.tasks = x,
      error: (err) => this.errorMessage = 'Error loading tasks: ' + err.message
    });
  }
}
