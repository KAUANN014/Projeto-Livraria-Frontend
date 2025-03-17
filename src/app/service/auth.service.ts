import { environment } from './../environments/environments';
import { Injectable } from '@angular/core';
import { Login } from '../core/models/login.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../core/models/login-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

apiUrl = environment.apiUrl;

constructor(private http: HttpClient, private router: Router) { }

login(login: Login): Observable<LoginResponse> {
  return this.http.post<LoginResponse>(`${this.apiUrl}User/login`, login)
  }

  logout(): void {
    localStorage.removeItem('authToken'); // Remove o token
    this.router.navigate(['/login']); // Redireciona para login
  }

}
