import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectserviceService } from '../projectservice.service';
import { Router } from '@angular/router';
import { Project } from '../Project';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit {

  description:string
  startDate:string
  endDate:string
  date1:any;
  date2:any;
  user:string
  constructor(private projectservice:ProjectserviceService,private router:Router ) { }

  ngOnInit(): void {
    this.user=sessionStorage.getItem('username')
    if(this.user==null)
    {
      alert('login first')
      this.router.navigate([''])
    }

  }
//check whether project start date is earlier than project end date
  validateDOJDOB()
 {

  
  this.date1=Date.parse(this.startDate)
  this.date2=Date.parse(this.endDate)
  if(this.date1>this.date2)
  {
    alert('Start Date cannot be later than End Date')
    this.startDate=""
    this.endDate=""
  }
        

 }
//add new project
 addProject(form:NgForm)
 {

  console.log("inside add project component.ts")
  if(form.valid)
  {
      let project=new Project();
      project.description=this.description
      project.projectStartDate=this.startDate
      project.projectEndDate=this.endDate

      this.projectservice.addJPAProject(project).subscribe(
        res => {
         
        }
      )
 }
        alert('Project Record Added Successfully')
        this.description=""
        this.startDate=""
        this.endDate=""

 }
}
