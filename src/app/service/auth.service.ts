import { environment } from './../environments/environments';
import { Injectable } from '@angular/core';
import { Login } from '../core/login.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../core/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

apiUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

login(login: Login): Observable<LoginResponse> {
  return this.http.post<LoginResponse>(`${this.apiUrl}User/login`, login)
  }

}
