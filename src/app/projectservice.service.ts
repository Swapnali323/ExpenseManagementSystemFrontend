import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Project } from './Project';


@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {

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


   /***************************GET LIST OF PROJECTS ******************/
  getJPAProjects(): Observable<Project>
  {
    console.log("inside get projects of operations.service.ts");
    return this.http.get<Project>('http://localhost:2020/projectdatabaseproviderservice/getprojects');

  }

   /***************************ADD NEW PROJECT ******************/
   addJPAProject(project:Project) : Observable<Project>
   {
     console.log("inside add project of operations.service.ts");
     return this.http.post<Project>('http://localhost:2020/projectdatabaseproviderservice/addproject', project)
   }

   /***************************DELETE PROJECT BY id*************************/
  deleteJPAProject(projectCode:number) : Observable<Project>
  {
    console.log("inside delete project of operations.service.ts");
    return this.http.delete<Project>('http://localhost:2020/projectdatabaseproviderservice/deleteproject?projectCode='+ projectCode )
  }

  /***************************SEARCH PROJECT BY CODE*************************/
  searchJPAProject(projectCode:number)
  {
    console.log("inside search PROJECT of operations.service.ts");
    return this.http.get<Project>('http://localhost:2020/projectdatabaseproviderservice/searchproject?projectCode='+  projectCode)

  }

  /***************************************UPDATE AN PROJECT******************** */

  updateJPAProject(project:Project) : Observable<Project>
  {
  console.log("inside update PROJECT of operations.service.ts");
  return this.http.put<Project>('http://localhost:2020/projectdatabaseproviderservice/updateproject', project )
  }

  /***************************SEARCH PROJECT by Description*************************/
  searchJPAProjectDesc(description: string): Observable<Project> {

    console.log("inside search project by description of operations.service.ts");
    return this.http.get<Project>('http://localhost:2020/projectdatabaseproviderservice/searchprojectdesc?description='+  description)
  }
}
