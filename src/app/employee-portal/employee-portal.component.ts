import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css']
})
export class EmployeePortalComponent implements OnInit {
  user:string
  constructor(private router:Router) { }

  ngOnInit(): void {
   
    this.user=sessionStorage.getItem('username')
    if(this.user==null)
    {
      alert('login first')
      this.router.navigate([''])
    }

  }
  Destroy()
  {
    if(confirm('ARE YOU SURE YOU WANT TO LOGOUT?'))
    sessionStorage.removeItem('username')
    
  }
}
