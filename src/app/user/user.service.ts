import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../employee/model/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }

  login(login: Login) {
    alert('hello')
    //alert("loginService: "+JSON.stringify(login));
    return this.http.post("http://localhost:9191/ngo/login.do", login);
  }
}
 