import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Task } from '../../models/task';
import { TaskService } from '../../service/task-service';

@Component({
  selector: 'app-create-task',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './create-task.html',
  styleUrl: './create-task.css'
})
export class CreateTask {
  newTask: Task = new Task();
  message: string;

  constructor(private _taskService: TaskService) {}

  create(): void {
    this._taskService.createTask(this.newTask).subscribe(() => {
      this.message = "Task created successfully!";
      this.newTask = new Task();
    });
  }
}