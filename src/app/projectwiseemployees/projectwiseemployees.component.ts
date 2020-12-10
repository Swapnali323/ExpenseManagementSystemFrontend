import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectwiseemployees',
  templateUrl: './projectwiseemployees.component.html',
  styleUrls: ['./projectwiseemployees.component.css']
})
export class ProjectwiseemployeesComponent implements OnInit {

  employees:any=[];
  projectCode:number;
  esize:number
  user:string
  constructor(private employeeservice:EmployeeserviceService,private router:Router) { }

  ngOnInit(): void {

    this.user=sessionStorage.getItem('username')
    if(this.user==null)
    {
      alert('login first')
      this.router.navigate([''])
    }
    console.log("initiated employee ids")
    this.employeeservice.getJPAEmployees().subscribe(
    (data => {
    this.employees = data             
  this.employees.forEach(element => {
    //id tracker
  })
})
)
  }
//load all employees under a single project
  projectwise(form:NgForm)
  {
    if (form.valid) {
      this.employeeservice.searchByProject(this.projectCode).subscribe(
        res => {
          
          this.employees = res
          this.esize=this.employees.length
          if(this.esize<1)
          {
            alert('Entered Project Record Not Found!!')
            this.employeeservice.getJPAEmployees().subscribe(
              (data => {
              this.employees = data             
            this.employees.forEach(element => {
              //id tracker
            })
          })
          )
          }
          
          this.projectCode=null;
          console.log("initiated employee ids")
         
        }
      )
    }
    
  }
}
