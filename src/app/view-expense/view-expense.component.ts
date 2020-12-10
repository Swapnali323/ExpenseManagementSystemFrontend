import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpenseserviceService } from '../expenseservice.service';
import { Router } from '@angular/router';
import { Expense } from '../Expense';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
})
export class ViewExpenseComponent implements OnInit {

  expenseid:number;
  user:string
  expenses:any=[]
  esize:number
  expenseType:string
  description:string
  etype:string
  expenseClass:Expense=new Expense()
  p:number=1;
  constructor(private expenseservice:ExpenseserviceService,private router:Router) { }

  ngOnInit(): void {

    this.user=sessionStorage.getItem('username')
    if(this.user==null)
    {
      alert('login first')
      this.router.navigate([''])
    }/******************load all expenses */
    console.log("initiated expense ids")
    this.expenseservice.getJPAExpenses().subscribe(
    (data => {
    this.expenses = data             
  this.expenses.forEach(element => {
    //id tracker
  })
})
)
  }

/***********************search expense by id */
  searchExpense(form:NgForm)
    {
      if (form.valid) {
        this.expenseservice.searchJPAExpense(this.expenseid).subscribe(
          res => {
            
            this.expenses = res
            this.esize=this.expenses.length
            if(this.esize<1)
            {
              alert('Entered Expense Record Not Found!!')
              this.expenseservice.getJPAExpenses().subscribe(
                (data => {
                this.expenses = data             
              this.expenses.forEach(element => {
                //id tracker
              })
            })
            )
            }
            
            this.expenseid=null;
            console.log("initiated expense ids")
           
          }
        )
      }
      
    }

/*******************************delete expense by id */
deleteExpense(expenseid:number)
{
// alert('delete'+expenseid)
if(confirm('ARE YOU SURE TO DELETE RECORD?'))
{
     console.log("inside delete expense of component")
     this.expenseservice.deleteJPAExpense(expenseid).subscribe(
      res => {
   //this.reprojects = res
             }
            )
      alert('Expense Record Deleted!!')
    // this.router.navigate(['admin-portal/employee/view-employee'])
      console.log("initiated expense ids")
        this.expenseservice.getJPAExpenses().subscribe(
          (data => {
          this.expenses = data             
          this.expenses.forEach(element => {
    //id tracker
      })
    })
  )
}

else
{
console.log("initiated expense ids")
this.expenseservice.getJPAExpenses().subscribe(
(data => {
this.expenses = data             
this.expenses.forEach(element => {
//id tracker
})
})
)


}

}
/****************************************Update Expense */
updateExpense(form:NgForm)
{

  console.log("inside update expense component.ts")
  if(form.valid)
  {
      let expense=new Expense();
      expense.expenseType=this.expenseClass.expenseType
      expense.description=this.expenseClass.description
      this.expenseservice.updateJPAExpense(this.expenseClass).subscribe(
        res => {
         
        }
      )
 }
        alert('Expense Record Updated Successfully')
       
        console.log("initiated expense ids")
this.expenseservice.getJPAExpenses().subscribe(
(data => {
this.expenses = data             
this.expenses.forEach(element => {
//id tracker
})
})
)

  }

  //***********************search project by type */
 searchExpenseByType(name:string)
 {

  console.log("inside change event for type")
     this.expenseservice.searchJPAExpenseType(this.etype).subscribe(
       res => {
         
         this.expenses = res
         this.esize=this.expenses.length
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
         console.log("initiated expense ids")
        
       }
     )
   
   
 }
}
