import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Expense } from './Expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseserviceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders
      (
        {
          'Content-Type': 'application/json'
        }
      )
  }

  errorhandl(error) {
    console.log(error.errorMessage);
    return throwError(error.errorMessage);
  }
  /***************************ADD NEW EXPENSE ******************/
  addJPAExpense(expense:Expense) : Observable<Expense>
  {
    console.log("inside add expense of operations.service.ts");
    return this.http.post<Expense>('http://localhost:2020/expensedatabaseproviderservice/addexpense', expense)
  }
/***************************GET LIST OF EXPENSES ******************/
getJPAExpenses(): Observable<Expense>
{
  console.log("inside get expenses of operations.service.ts");
  return this.http.get<Expense>('http://localhost:2020/expensedatabaseproviderservice/getexpenses');

}

/***************************SEARCH EXPENSE BY CODE*************************/
searchJPAExpense(expenseCode:number)
{
  console.log("inside search expense of operations.service.ts");
  return this.http.get<Expense>('http://localhost:2020/expensedatabaseproviderservice/searchexpense?expenseCode='+  expenseCode)

}
/***************************DELETE EXPENSE BY id*************************/
deleteJPAExpense(expenseCode:number) : Observable<Expense>
{
  console.log("inside delete expense of operations.service.ts");
  return this.http.delete<Expense>('http://localhost:2020/expensedatabaseproviderservice/deleteexpense?expenseCode='+ expenseCode )
}

/***************************************UPDATE AN EXPENSE******************** */

updateJPAExpense(expense:Expense) : Observable<Expense>
{
  console.log("inside update expense of operations.service.ts");
  return this.http.put<Expense>('http://localhost:2020/expensedatabaseproviderservice/updateexpense', expense )
}

/***************************SEARCH EXPENSE by Type*************************/
searchJPAExpenseType(expenseType: string): Observable<Expense> {

  console.log("inside search expense by type of operations.service.ts");
  return this.http.get<Expense>('http://localhost:2020/expensedatabaseproviderservice/searchexpensetype?expenseType='+  expenseType)
}
}
