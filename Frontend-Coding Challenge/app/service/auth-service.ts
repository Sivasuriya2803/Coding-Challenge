import { Injectable } from '@angular/core';
import { AuthRequest } from '../models/auth-request';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  generateToken(authRequest: AuthRequest): Observable<any> {
    // Mock authentication: accept any username/password, return a fake token
    if (authRequest.username && authRequest.password) {
      const mockToken = 'mock-jwt-token';
      return of(mockToken);
    } else {
      return of('');
    }
  }
}
