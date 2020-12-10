import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders
      (
        {
          'Content-Type': 'application/json'
        }
      )
  }

  errorhandl(error) {
    console.log(error.errorMessage);
    return throwError(error.errorMessage);
  }

  /********************************* VALIDATE LOGIN CREDENTIALS */
  login(user:User) : Observable<User>
  {
    console.log("inside login of operations.service.ts"+user.userName+user.password);
    return this.http.post<User>('http://localhost:9001/login',user);
  }


  /***************************REGISTER NEW USER ******************/
  addUser(user:User) : Observable<User>
  {
    console.log("inside add user of operations.service.ts");
    return this.http.post<User>('http://localhost:2020/logindatabaseproviderservice/adduser', user)
  }
}
