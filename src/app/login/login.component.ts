import { Component, OnInit } from '@angular/core';
import { Routes,RouterModule, RouteReuseStrategy, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../User';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string;
  isLogginIn:boolean;
  constructor(private loginservice:LoginService,private router: Router,private toaster:ToastrService) { }


  ngOnInit(): void {
    sessionStorage.setItem('username',null)
  }

  login(form:NgForm) { 
    this.isLogginIn = true
    console.log("inside com.ts"+this.userName+this.password)
    if((!this.userName) && (!this.password))
    {
      alert('Please Enter UserName & Password')
      return
    }
    if(!this.userName)
    {
      alert('Please Enter UserName')
      return
    }
     
    if(!this.password)
    {
      alert('Please Enter Password')
      return
    }
    
    
    if (form.valid) {
      let user = new User()
      user.userName = this.userName
      user.password = this.password
      this.loginservice.login(user).subscribe(
        res => {
          if (res == null)
          {
            alert('Invalid UserName or Password Entered!!')
            this.userName="";
            this.password=""
          }
          else if (res.role.toLowerCase()== "employee")
          {
            alert("Logging in as Employee")
            //this.toaster.success('Logging in as','Employee!');
            sessionStorage.setItem('username', res.userName)
            console.log("role"+res.role)
            this.router.navigate(['employee-portal'])
            return true;
          }
          else if (res.role.toLowerCase()== "project manager")
          {
            alert("Logging in as Project Manager")
            sessionStorage.setItem('username', res.userName)
            console.log("role"+res.role)
            this.router.navigate(['projectmanager-portal'])
            return true;
          }
          else if (res.role.toLowerCase()== "expense manager")
          {
            alert("Logging in as Expense Manager")
            sessionStorage.setItem('username', res.userName)
            console.log("role"+res.role)
            this.router.navigate(['expensemanager-portal'])
            return true;
          }
          else if (res.role.toLowerCase()== "admin")
          {
            alert("Logging in as Admin")
            sessionStorage.setItem('username', res.userName)
            console.log("role"+res.role)
            this.router.navigate(['admin-portal'])
            return true;
          }
        }
      )
    }
  }
  
}
