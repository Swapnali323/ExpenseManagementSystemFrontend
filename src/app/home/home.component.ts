import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Route } from '@angular/compiler/src/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../User';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName:string;
  password:string;
  isLogginIn:boolean;
  role:string
  constructor(private loginservice:LoginService,private router: Router,private toaster:ToastrService) { }

  ngOnInit(): void {
    //sessionStorage.getItem('username')
    this.userName="";
    this.password=""
    this.role=""
    //this.toaster.success('!','Welcome');
  }

  show()
  {
    this.toaster.success('!','Welcome');
  }
  signup(form:NgForm)
  {

    this.isLogginIn = true
    console.log("inside com.ts"+this.userName+this.password)
    if (form.valid) {
      let user = new User()
      user.userName = this.userName
      user.password = this.password
      user.role=this.role
      this.loginservice.addUser(user).subscribe(
        res => {
          
        }
      )
        alert('Registered successfully')
        this.userName="";
        this.password=""
        this.role=""
        this.router.navigate(['/home/login'])


    }
  }
    reroute(form:NgForm)
    {
      alert('re-routing')
      
      this.router.navigate([''])
    }


  

}
