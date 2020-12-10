import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Project } from './Project';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

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

  /***************************ADD NEW EMPLOYEE*************************/

  addJPAEmployee(employee:Employee) : Observable<Employee>
  {
    console.log("inside add employee of operations.service.ts");
    return this.http.post<Employee>('http://localhost:2020/employeedatabaseproviderservice/addemployee', employee)
  }

  /***************************GET LIST OF EMPLOYEES*************************/

  getJPAEmployees(): Observable<Employee>
  {
    console.log("inside get employees of operations.service.ts");
    return this.http.get<Employee>('http://localhost:2020/employeedatabaseproviderservice/getemployees');

  }

/***************************SEARCH EMPLOYEE BY id*************************/
  searchJPAEmployee(employeeId: number): Observable<Employee> {

    console.log("inside search employee of operations.service.ts");
    return this.http.get<Employee>('http://localhost:2020/employeedatabaseproviderservice/searchemployee?employeeId='+  employeeId)
  }

/***************************DELETE EMPLOYEE BY id*************************/
  deleteJPAEmployee(employeeId:number) : Observable<Employee>
  {
    console.log("inside delete employee of operations.service.ts");
    return this.http.delete<Employee>('http://localhost:2020/employeedatabaseproviderservice/deleteemployee?employeeId='+ employeeId )
  }
/***************************SEARCH PROJECT WISE EMPLOYEES*************************/
  searchByProject(projectCode:number)
  {
    console.log("inside search project wise employees of operations.service.ts");
    return this.http.get<Employee>('http://localhost:2020/employeedatabaseproviderservice/projectwiseemployees?projectCode='+  projectCode)

  }
   /***************************************UPDATE AN EMPLOYEE******************** */

   updateJPAEmployee(employee:Employee) : Observable<Employee>
   {
   console.log("inside update EMPLOYEE of operations.service.ts");
   return this.http.put<Employee>('http://localhost:2020/employeedatabaseproviderservice/updateemployee', employee )
   }
   /***************************SEARCH EMPLOYEE BY name*************************/
  searchJPAEmployeeName(name: string): Observable<Employee> {

    console.log("inside search employee by name of operations.service.ts");
    return this.http.get<Employee>('http://localhost:2020/employeedatabaseproviderservice/searchemployeename?name='+  name)
  }
}
