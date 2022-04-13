import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../Model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl = 'https://localhost:44325/api/Authenticate/login';
  constructor(private http: HttpClient, private router: Router) { }

  proceedLogin(usercred: Login): Observable<Login> {
    return this.http.post<Login>(this.apiurl, usercred)
  }
  getToken() {
   return localStorage.getItem('token');
   

  }
}

