import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Claim } from './Claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimserviceService {

  constructor(private http:HttpClient) { }

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
/*******************************Claim an expense */
  addJPAClaim(claim:Claim) : Observable<Claim>
  {
    console.log("inside add claim of operations.service.ts");
    return this.http.post<Claim>('http://localhost:2020/claimdatabaseproviderservice/addclaim', claim)
  }

 /***************************GET LIST OF CLAIMS*************************/

 getJPAClaims(): Observable<Claim>
 {
   console.log("inside get claims of operations.service.ts");
   return this.http.get<Claim>('http://localhost:2020/claimdatabaseproviderservice/getclaims');

 }

/***************************SEARCH CLAIM BY id*************************/
 searchJPAClaim(claimId: number): Observable<Claim> {

   console.log("inside search claim of operations.service.ts");
   return this.http.get<Claim>('http://localhost:2020/claimdatabaseproviderservice/searchclaim?claimId='+  claimId)
 }

 /***************************SEARCH EMPLOYEE WISE claims*************************/
 searchJPAEmployeeClaims(employeeId: number): Observable<Claim> {

  console.log("inside search employee wise claims of operations.service.ts");
  return this.http.get<Claim>('http://localhost:2020/claimdatabaseproviderservice/employeewiseclaims?employeeId='+  employeeId)
}
/***************************DELETE Claim BY id*************************/
 deleteJPAClaim(claimId:number) : Observable<Claim>
 {
   console.log("inside delete claim of operations.service.ts");
   return this.http.delete<Claim>('http://localhost:2020/claimdatabaseproviderservice/deleteclaim?claimId='+ claimId )
 }
/***************************************UPDATE AN Claim******************** */

updateJPAClaim(claim:Claim) : Observable<Claim>
{
console.log("inside update CLAIM of operations.service.ts");
return this.http.put<Claim>('http://localhost:2020/claimdatabaseproviderservice/updateclaim?', claim )
}
}
