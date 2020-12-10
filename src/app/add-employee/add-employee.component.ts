import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { ProjectserviceService } from '../projectservice.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  expenseClaimiId:number;
	employeeId:number;
	projectCode:number;
  response:string=null;
  projectCodee:string;
  id:number;
  projects:any=[]
  employeeName:string;
  projectids:any=[]
  PANid:string
  designation:string
  domain:string
  dob:string
  doj:string
  email:string
  salary:number
  user:string
  date1:any
  date2:any
  reprojects:any=[]
  constructor(private employeeservice:EmployeeserviceService,private projectservice:ProjectserviceService,private router:Router ) { }

  ngOnInit(): void {

   //restrict user from directly accessing URL
   this.user=sessionStorage.getItem('username')
    if(this.user==null)
    {
      alert('login first')
      this.router.navigate([''])
    }
    //load all employees in to list an extract employee ids 
    console.log("initiated project ids")
          this.projectservice.getJPAProjects().subscribe(
          (data => {
	        this.projects = data             
        this.projects.forEach(element => {
          this.projectids.push(element.projectCode)
        })
      })
      )
  }

   //register a new employee 
 addEmployee(form:NgForm)
 {
  console.log("inside add employee component.ts")
  if(form.valid)
  {
      let employee=new Employee();
      employee.name=this.employeeName;
      employee.panid=this.PANid;
      employee.designation=this.designation;
      employee.domain=this.domain
      employee.dob=this.dob
      employee.doj=this.doj
      employee.projectCode=this.projectCode
      employee.salary=this.salary
      employee.mailId=this.email
      this.employeeservice.addJPAEmployee(employee).subscribe(
        res => {
         
        }
      )
 }
        alert('Employee Record Added Successfully')
        this.employeeName="";
        this.PANid="";
        this.designation="";
        this.domain=""
        this.dob=""
        this.doj=""
        this.projectCode=null
        this.salary=null
        this.email=""
  
 }

///checker
 checker(form:NgForm)
 {
   console.log(this.PANid)
   console.log(this.dob)
   console.log(this.doj)
 }
//checks whether entered date of birth is earlier than date of joining
 validateDOJDOB()
 {

  
  this.date1=Date.parse(this.dob)
  this.date2=Date.parse(this.doj)
  if(this.date1>this.date2)
  {
    alert('Date of birth cannot be later than Date of joining')
    this.dob=""
    this.doj=""
  }
        

 }

 /*************************************display selected project code details */

 loadprojectids(id:number)
{
  console.log("inside check project of component")
  this.projectservice.searchJPAProject(id).subscribe(
    res => {
      this.reprojects = res
    }
  )
}
}
