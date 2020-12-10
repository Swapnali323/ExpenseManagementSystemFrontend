import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { ProjectserviceService } from '../projectservice.service';
import { ExpenseserviceService } from '../expenseservice.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NgForm } from '@angular/forms';
import { Claim } from '../Claim';
import { ClaimserviceService } from '../claimservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-expense',
  templateUrl: './claim-expense.component.html',
  styleUrls: ['./claim-expense.component.css']
})
export class ClaimExpenseComponent implements OnInit {

  expenseClaimiId:number;
	employeeId:number;
	projectCode:number;
  expenseCode:number;
  response:string=null;
  employees:any=[]
  employeeids:any=[]
  expenses:any=[]
  expenseids:any=[]
  projects:any=[]
  projectids:any=[]
  projectCodee:string;
  id:number;
  expcode:any;
  reexpenses:any=[];
  reprojects:any=[];
  reemployees:any=[];
  employeeid:any;
  esize:number
  Amount:number;
 user:string
  constructor(private claimservice:ClaimserviceService,private employeeservice:EmployeeserviceService,private projectservice:ProjectserviceService,
    private expenseservice:ExpenseserviceService,private router:Router) { }

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
          this.employeeids.push(element.employeeId)
        })
      })
      )
      console.log("initiated expense ids")
          this.expenseservice.getJPAExpenses().subscribe(
          (data => {
	        this.expenses = data             
        this.expenses.forEach(element => {
          this.expenseids.push(element.expenseCode)
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


  /****************************search the employee record fro enetered employee id */
  loademployeeids(id:number)
{
  //this.esize=0
  console.log("inside check employee of component")
  this.employeeservice.searchJPAEmployee(id).subscribe(
    res => {
      this.reemployees = res
      this.esize=this.reemployees.length
    if(this.esize<1)
    {
      alert('Invalid Employee ID!')
      this.employeeId=null
      console.log("size"+this.esize)  

    }
   
    }

  )
  
}
loadexpenseids(id:number)
{
  console.log("inside check expense of component")
  this.expenseservice.searchJPAExpense(id).subscribe(
    res => {
      this.reexpenses = res
    }
  )
}




loadprojectids(id:number)
{
  console.log("inside check project of component")
  this.projectservice.searchJPAProject(id).subscribe(
    res => {
      this.reprojects = res
    }
  )
}

addExpClaim(form: NgForm) {
  if (form.valid) {
    let claim = new Claim()
    claim.expenseClaimId = this.expenseClaimiId
   claim.employeeId=this.employeeId
   claim.expenseCode=this.expenseCode
   claim.projectCode=this.projectCode
   claim.amount=this.Amount;
    this.claimservice.addJPAClaim(claim).subscribe(
      res => {
       
      }
    )
  }
  alert('Expense Claimed!!')
  this.employeeId=null
  this.projectCode=null
  this.expenseCode=null
  this.Amount=null

}
}
