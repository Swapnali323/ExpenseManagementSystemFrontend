import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ProjectserviceService } from '../projectservice.service';
import { Project } from '../Project';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  projectid:number;
  projects:any=[];
  projectClass:Project=new Project()
  esize:number
  user:string
  date1:any;
  date2:any;
  description:string
  p:number=1;
  constructor(private projectservice:ProjectserviceService,private router:Router) { }

  ngOnInit(): void {

    this.user=sessionStorage.getItem('username')
    if(this.user==null)
    {
      alert('login first')
      this.router.navigate([''])
    }/******************load all projects */
    console.log("initiated project ids")
    this.projectservice.getJPAProjects().subscribe(
    (data => {
    this.projects = data             
  this.projects.forEach(element => {
    //id tracker
  })
})
)
  }
/************************************search project by project code */
  searchProject(form:NgForm)
  {
    if (form.valid) {
      this.projectservice.searchJPAProject(this.projectid).subscribe(
        res => {
          
          this.projects = res
          this.esize=this.projects.length
          if(this.esize<1)
          {
            alert('Entered Project Record Not Found!!')
            this.projectservice.getJPAProjects().subscribe(
              (data => {
              this.projects = data             
            this.projects.forEach(element => {
              //id tracker
            })
          })
          )
          }
          
          this.projectid=null;
          console.log("initiated project ids")
         
        }
      )
    }
    

  }


/***********************************************delete project by project code */
  deleteProject(projectCode:number)
  {
  // alert('delete'+projectid)
  if(confirm('ARE YOU SURE TO DELETE RECORD?'))
    {
         console.log("inside delete project of component")
         this.projectservice.deleteJPAProject(projectCode).subscribe(
          res => {
       //this.reprojects = res
                 }
                )
          alert('Project Record Deleted!!')
        // this.router.navigate(['admin-portal/employee/view-employee'])
          console.log("initiated project ids")
            this.projectservice.getJPAProjects().subscribe(
              (data => {
              this.projects = data             
              this.projects.forEach(element => {
        //id tracker
          })
        })
      )
   }

  else
  {
   console.log("initiated project ids")
   this.projectservice.getJPAProjects().subscribe(
   (data => {
   this.projects = data             
 this.projects.forEach(element => {
   //id tracker
 })
})
)


  }
  
  }
  //check whether project start date is earlier than project end date
  validateDOJDOB()
 {

  
  this.date1=Date.parse(this.projectClass.projectStartDate)
  this.date2=Date.parse(this.projectClass.projectEndDate)
  if(this.date1>this.date2)
  {
    alert('Start Date cannot be later than End Date')
    this.projectClass.projectStartDate=""
    this.projectClass.projectEndDate=""
  }
        

 }

  //*****************************Update project************************************** */

  updateProject(form:NgForm)
  {

    console.log("inside add project component.ts")
    if(form.valid)
    {
        let project=new Project();
        project.description=this.projectClass.description
        this.projectservice.updateJPAProject(this.projectClass).subscribe(
          res => {
           
          }
        )
   }
          alert('Project Record Updated Successfully')

          console.log("initiated project ids")
   this.projectservice.getJPAProjects().subscribe(
   (data => {
   this.projects = data             
 this.projects.forEach(element => {
   //id tracker
 })
})
)
          
  }

  //***********************search project by description */
 searchProjectByDesc(name:string)
 {

  console.log("inside change event for description")
     this.projectservice.searchJPAProjectDesc(this.description).subscribe(
       res => {
         
         this.projects = res
         this.esize=this.projects.length
        //  if(this.esize<1)
        //  {
        //    alert('Entered Employee Record Not Found!!')
        //    this.employeeservice.getJPAEmployees().subscribe(
        //      (data => {
        //      this.employees = data             
        //    this.employees.forEach(element => {
        //      //id tracker
        //    })
        //  })
        //  )
        //  }
         
         //this.employeeid=null;
         console.log("initiated project ids")
        
       }
     )
   
   
 }
}
