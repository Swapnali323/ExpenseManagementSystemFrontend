import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Approval } from './Approval';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {




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
/*******************************Add an approval status */
  addJPAApproval(approval:Approval) : Observable<Approval>
  {
    console.log("inside add approval of operations.service.ts");
    return this.http.post<Approval>('http://localhost:2020/claimdatabaseproviderservice/addstatus', approval)
  }

 /***************************GET LIST OF Approvals*************************/

 getJPAApprovals(): Observable<Approval>
 {
   console.log("inside get approvals of operations.service.ts");
   return this.http.get<Approval>('http://localhost:2020/claimdatabaseproviderservice/getapprovals');

 }

/***************************SEARCH CLAIM BY id*************************/
 searchJPAApproval(claimId: number): Observable<Approval> {

   console.log("inside search approval of operations.service.ts");
   return this.http.get<Approval>('http://localhost:2020/claimdatabaseproviderservice/searchapproval?claimId='+  claimId)
 }

 /***************************SEARCH EMPLOYEE WISE approvals*************************/
 searchJPAEmployeeApprovals(employeeId: number): Observable<Approval> {

  console.log("inside search employee wise approvals of operations.service.ts");
  return this.http.get<Approval>('http://localhost:2020/claimdatabaseproviderservice/employeewiseapprovals?employeeId='+  employeeId)
}

 /***************************Send Email on approvals*************************/
 sendEmail(email:String,eapproval:Approval): Observable<Approval> {

  console.log("inside send email operations.service.ts"+email+eapproval.status);
  return this.http.get<Approval>('http://localhost:6001/sendmail?mail='+email+'&claimid='+eapproval.expenseClaimId)

}


}
