import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpenseserviceService } from '../expenseservice.service';
import { Router } from '@angular/router';
import { Project } from '../Project';
import { Expense } from '../Expense';

@Component({
  selector: 'app-add-expensecode',
  templateUrl: './add-expensecode.component.html',
  styleUrls: ['./add-expensecode.component.css']
})
export class AddExpensecodeComponent implements OnInit {
  
  expenseType:string
  description:string
  user:string
  constructor(private expenseservice:ExpenseserviceService,private router:Router) { }


  ngOnInit(): void {

    this.user=sessionStorage.getItem('username')
    if(this.user==null)
    {
      alert('login first')
      this.router.navigate([''])
    }
  }

  /*******************************add an expense *****************************/
  addExpense(form:NgForm)
  {

    console.log("inside add expense component.ts")
  if(form.valid)
  {
      let expense=new Expense();
      expense.expenseType=this.expenseType
      expense.description=this.description
      this.expenseservice.addJPAExpense(expense).subscribe(
        res => {
         
        }
      )
 }
        alert('Expense Record Added Successfully')
        this.expenseType=""
        this.description=""

  }
}
