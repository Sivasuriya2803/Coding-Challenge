import { Component } from '@angular/core';
import { TaskService } from '../../service/task-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Task } from '../../models/task';

@Component({
  selector: 'app-delete-task',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './delete-task.html',
  styleUrl: './delete-task.css'
})
export class DeleteTask {
  taskId: number;
  message: string | null = null;
  errorMessage: string | null = null;
  tasks: Task[] = [];

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this._taskService.getAllTasks().subscribe({
      next: (x) => this.tasks = x,
      error: (err) => this.errorMessage = 'Error loading tasks: ' + err.message
    });
  }

  delete(): void {
    if (!this.taskId) {
      this.message = 'Please enter a valid task ID to delete.';
      return;
    }
    this._taskService.deleteTask(this.taskId).subscribe({
      next: (response) => {
        this.message = response;
        this._taskService.getAllTasks().subscribe(updatedTasks => {
          this.tasks = updatedTasks;
        });
      },
      error: (err) => {
        this.message = 'Error deleting task: ' + err.message;
      }
    });
  }
}
