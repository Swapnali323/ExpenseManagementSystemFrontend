import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
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

}
