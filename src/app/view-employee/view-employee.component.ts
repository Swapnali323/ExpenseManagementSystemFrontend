import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../Employee';
import { ProjectserviceService } from '../projectservice.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employees:any=[];
  employeeid:number;
  esize:number
  user:string
  empClass:Employee=new Employee()
  projects:any=[]
  projectids:any=[]
  reprojects:any=[]
  name:string;
  p: number = 1;
  constructor(private projectservice:ProjectserviceService,private employeeservice:EmployeeserviceService,private router:Router) { }

  ngOnInit(): void {

   
    this.user=sessionStorage.getItem('username')
    if(this.user==null)
    {
      alert('login first')
      this.router.navigate([''])
    }//load all employees
    console.log("initiated employee ids")
          this.employeeservice.getJPAEmployees().subscribe(
          (data => {
	        this.employees = data             
        this.employees.forEach(element => {
          //id tracker
        })
      })
      )
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
//***********************search employee by id */
  searchEmployee(form:NgForm)
  {
    if (form.valid) {
      this.employeeservice.searchJPAEmployee(this.employeeid).subscribe(
        res => {
          
          this.employees = res
          this.esize=this.employees.length
          if(this.esize<1)
          {
            alert('Entered Employee Record Not Found!!')
            this.employeeservice.getJPAEmployees().subscribe(
              (data => {
              this.employees = data             
            this.employees.forEach(element => {
              //id tracker
            })
          })
          )
          }
          
          //this.employeeid=null;
          console.log("initiated employee ids")
         
        }
      )
    }
    
  }
  /*******************************************DELETE SELECTED EMPLOYEE**************************************** */
    deleteEmployee(employeeid:number)
    {
     // alert('delete'+employeeid)
     if(confirm('ARE YOU SURE TO DELETE RECORD?'))
     {
      console.log("inside delete employee of component")
      this.employeeservice.deleteJPAEmployee(employeeid).subscribe(
        res => {
          //this.reprojects = res
        }
      )
      alert('Employee Record Deleted!!')
     // this.router.navigate(['admin-portal/employee/view-employee'])
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

     else
     {
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
    
    }
/************************************************************************************************* */
    deletedialog()
    {
      if(confirm('are you sure'))
      console.log('deleted dialog checked')
      else
      console.log('deleted dialog not checked')
    }
   
    /*****************************************Update Employee ***************************** */
    updateEmployee(form:NgForm)
    {
      console.log("inside update employee component.ts")
      if(form.valid)
      {
          
          this.employeeservice.updateJPAEmployee(this.empClass).subscribe(
            res => {
             
            }
          )
     }
            alert('Employee Record Updated Successfully')
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

 //***********************search employee by name */
 searchEmployeeByName(name:string)
 {

  console.log("inside change event for name")
     this.employeeservice.searchJPAEmployeeName(this.name).subscribe(
       res => {
         
         this.employees = res
         this.esize=this.employees.length
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
         console.log("initiated employee ids")
        
       }
     )
   
   
 }
  }

