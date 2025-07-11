import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:2003/api/tasks';

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/getAllTasks`);
  }

  getTaskById(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/getTaskById/${taskId}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/createTask`, task);
  }

  updateTask(taskId: number, task: Task): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/updateTask/${taskId}`, task);
  }

  deleteTask(taskId: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/deleteTask/${taskId}`);
  }
}
