import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../service/task-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-task',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './update-task.html',
  styleUrl: './update-task.css'
})
export class UpdateTask {
  taskId: number;
  task: Task = new Task();
  message: string;
  errorMessage: string | null = null;
  tasks: Task[] = [];

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this._taskService.getAllTasks().subscribe({
      next: (x) => this.tasks = x,
      error: (err) => this.errorMessage = 'Error loading tasks: ' + err.message
    });
  }
  update(): void {
    this._taskService.updateTask(this.taskId, this.task).subscribe(x => {
      this.message = x;
      this._taskService.getAllTasks().subscribe(updatedTasks => {
        this.tasks = updatedTasks;
      });
    });
  }
}