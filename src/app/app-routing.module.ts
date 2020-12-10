import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClaimExpenseComponent } from './claim-expense/claim-expense.component';
import { ViewExpenseComponent } from './view-expense/view-expense.component';
import { SearchExpenseComponent } from './search-expense/search-expense.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { SearchProjectsComponent } from './search-projects/search-projects.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { ExpenseComponent } from './expense/expense.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { UpdateExpensecodeComponent } from './update-expensecode/update-expensecode.component';
import { AddExpensecodeComponent } from './add-expensecode/add-expensecode.component';
import { SearchExpenseclaimComponent } from './search-expenseclaim/search-expenseclaim.component';
import { ProjectmanagerPortalComponent } from './projectmanager-portal/projectmanager-portal.component';
import { ExpensemanagerPortalComponent } from './expensemanager-portal/expensemanager-portal.component';
import { ProjectwiseemployeesComponent } from './projectwiseemployees/projectwiseemployees.component';
import { ApprovalComponent } from './approval/approval.component';
import { ApprovalstatusComponent } from './approvalstatus/approvalstatus.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"home",component:HomeComponent,
    children: [
      {path:"login",component:LoginComponent}
    ]
  },
  {path:"employee-portal",component:EmployeePortalComponent,
    children:[
      {path:"claim-expense",component:ClaimExpenseComponent},
      {path:"search-expenseeclaim",component:SearchExpenseclaimComponent},
      {path:"search-expense",component:SearchExpenseComponent},
      {path:"claim-status",component:ApprovalstatusComponent},
      {path:"search-projects",component:SearchProjectsComponent}
    ]
  },
  {path:"admin-portal",component:AdminPortalComponent,
  children: [
    {path:"employee",component:EmployeeComponent,
      children:[
        {path:"add-employee",component:AddEmployeeComponent},
        {path:"view-employee",component:ViewEmployeeComponent},
        {path:"projectwise-employee",component:ProjectwiseemployeesComponent},
        {path:"search-expenseeclaim",component:SearchExpenseclaimComponent},
        {path:"approval",component:ApprovalComponent},
        {path:"update-employee",component:UpdateEmployeeComponent}
      ]
    }
  ]
  },
  {path:"expensemanager-portal",component:ExpensemanagerPortalComponent,
  children: [
    
    {path:"expense",component:ExpenseComponent,
      children:[
        {path:"add-expense",component:AddExpensecodeComponent},
        {path:"view-expense",component:ViewExpenseComponent},
        {path:"update-expense",component:UpdateExpensecodeComponent}
      ]
    }
  ]
  },
  {path:"projectmanager-portal",component:ProjectmanagerPortalComponent,
  children: [
    
    {path:"project",component:ProjectComponent,
    children:[
      {path:"add-project",component:AddProjectsComponent},
      {path:"view-project",component:ViewProjectsComponent},
      {path:"update-project",component:UpdateProjectComponent}
    ]
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,LoginComponent,EmployeePortalComponent,AdminPortalComponent,ClaimExpenseComponent,
  ViewExpenseComponent,SearchExpenseComponent,ViewProjectsComponent,AddEmployeeComponent,ViewEmployeeComponent,AddProjectsComponent,
  SearchProjectsComponent,EmployeeComponent,ProjectComponent,ExpenseComponent,UpdateEmployeeComponent,UpdateProjectComponent,UpdateExpensecodeComponent,
  AddExpensecodeComponent,SearchExpenseclaimComponent,ApprovalstatusComponent,ApprovalComponent,ExpensemanagerPortalComponent,ProjectmanagerPortalComponent,ProjectwiseemployeesComponent]
