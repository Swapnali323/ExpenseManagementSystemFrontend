import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClaimserviceService } from '../claimservice.service';
import { Router } from '@angular/router';
import { Claim } from '../Claim';
import { ExpenseserviceService } from '../expenseservice.service';
import { EmployeeserviceService } from '../employeeservice.service';
import { ProjectserviceService } from '../projectservice.service';
import { Approval } from '../Approval';
import { ApprovalService } from '../approval.service';

@Component({
  selector: 'app-approvalstatus',
  templateUrl: './approvalstatus.component.html',
  styleUrls: ['./approvalstatus.component.css']
})
export class ApprovalstatusComponent implements OnInit {

  claimid:number
  claims:any=[]
  esize:number
  user:string
  employeeid:number
  claimClass:Claim=new Claim()
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
  p:number=1;
  Amount:number;
  semployee:number
  sproject:number;
  sexpense:number;
  vemployees:any=[]
  vprojects:any=[]
  vexpenses:any=[]
  approvalClass:Approval=new Approval()
  msg:string

  constructor(private employeeservice:EmployeeserviceService,private projectservice:ProjectserviceService,
    private expenseservice:ExpenseserviceService,private claimservice:ClaimserviceService,private router:Router,private approvalservice:ApprovalService) { }

  ngOnInit(): void {

    this.user=sessionStorage.getItem('username')
    if(this.user==null)
    {
      alert('login first')
      this.router.navigate([''])
    }/******************load all claims */
    console.log("initiated approval ids")
    this.approvalservice.getJPAApprovals().subscribe(
    (data => {
    this.claims = data             
  this.claims.forEach(element => {
    //id tracker
  })
})
)

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


  /************************************search claim by expense claim ID */
  searchClaim(form:NgForm)
  {
    if (form.valid) {
      this.approvalservice.searchJPAApproval(this.claimid).subscribe(
        res => {
          
          this.claims = res
          this.esize=this.claims.length
          if(this.esize<1)
          {
            alert('Entered Claim Record Not Found!!')
            this.approvalservice.getJPAApprovals().subscribe(
              (data => {
              this.claims = data             
            this.claims.forEach(element => {
              //id tracker
            })
          })
          )
          }
          
          this.claimid=null;
          console.log("initiated claim ids")
         
        }
      )
    }
    

  }
/************************************search employee wise claims */
searchEmployeeClaim(form:NgForm)
{
  if (form.valid) {
    this.approvalservice.searchJPAEmployeeApprovals(this.employeeid).subscribe(
      res => {
        
        this.claims = res
        this.esize=this.claims.length
        if(this.esize<1)
        {
          alert('Entered Employee Record Not Found!!')
          this.approvalservice.getJPAApprovals().subscribe(
            (data => {
            this.claims = data             
          this.claims.forEach(element => {
            //id tracker
          })
        })
        )
        }
        
        this.employeeid=null;
        console.log("initiated employee ids")
       
      }
    )
  }
  

}

  /***********************************************delete project by project code */
  deleteClaim(claimid:number)
  {
  // alert('delete'+projectid)
  if(confirm('ARE YOU SURE TO DELETE RECORD?'))
    {
         console.log("inside delete claim of component")
         this.claimservice.deleteJPAClaim(claimid).subscribe(
          res => {
       //this.reprojects = res
                 }
                )
          alert('Claim Record Deleted!!')
        // this.router.navigate(['admin-portal/employee/view-employee'])
          console.log("initiated claim ids")
            this.claimservice.getJPAClaims().subscribe(
              (data => {
              this.claims = data             
              this.claims.forEach(element => {
        //id tracker
          })
        })
      )
   }

  else
  {
   console.log("initiated claim ids")
   this.claimservice.getJPAClaims().subscribe(
   (data => {
   this.claims = data             
 this.claims.forEach(element => {
   //id tracker
 })
})
)


  }
  
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

   /*************************************update expense claim */
   updateExpClaim(form: NgForm) {
    if (form.valid) {
      let claim = new Claim()
      claim.expenseClaimId = this.claimClass.expenseClaimId
     claim.employeeId=this.claimClass.employeeId
     claim.expenseCode=this.claimClass.expenseCode
     claim.projectCode=this.claimClass.projectCode
     claim.amount=this.claimClass.amount
      this.claimservice.updateJPAClaim(this.claimClass).subscribe(
        res => {
         
        }
      )
    }
    alert('Claim Updated!!')
    this.claimservice.getJPAClaims().subscribe(
      (data => {
      this.claims = data             
    this.claims.forEach(element => {
      //id tracker
    })
  })
  )
  
  }

  /************************************load claim detailed info  */

  detail(empid:number,projid:number,expid:number)
  {
    console.log("employee info"+empid)
    this.employeeservice.searchJPAEmployee(empid).subscribe(
      res => {
        
        this.vemployees = res
        this.esize=this.vemployees.length
        if(this.esize<1)
          
          this.employeeservice.getJPAEmployees().subscribe(
            (data => {
            this.vemployees = data             
          this.vemployees.forEach(element => {
            //id tracker
          })
        })
        )
        
        
        //this.employeeid=null;
        console.log("initiated employee ids")
       
      }
    )

    this.projectservice.searchJPAProject(projid).subscribe(
      res => {
        
        this.vprojects = res
        this.esize=this.vprojects.length
        if(this.esize<1)
      
         
          this.projectservice.getJPAProjects().subscribe(
            (data => {
            this.projects = data             
          this.projects.forEach(element => {
            //id tracker
          })
        })
        )
        
        
        
        console.log("initiated project ids")
       
      }
    )

    this.expenseservice.searchJPAExpense(expid).subscribe(
      res => {
        
        this.vexpenses = res
        this.esize=this.vexpenses.length
        if(this.esize<1)
        
         
          this.expenseservice.getJPAExpenses().subscribe(
            (data => {
            this.vexpenses = data             
          this.vexpenses.forEach(element => {
            //id tracker
          })
        })
        )
        
        
        
        console.log("initiated expense ids")
       
      }
    )
  }


  /*********************************************Add Approval status for claim */

  addApproval(claimId:number,employeeId:number,expenseCode:number,projectCode:number,status:number) {

    console.log("inside add approval component.ts")
    
      let approval=new Approval
      approval.expenseClaimId=claimId;
      approval.employeeId=employeeId
      approval.expenseCode=expenseCode
      approval.projectCode=projectCode
      if(status==1)
      {
        approval.status="Approved"
        this.msg="Approved"

      }
      else if(status==2)
      {
        approval.status="Rejected"
        this.msg="Rejected"
      }
       
      else
      {
        approval.status="Claimed"
        this.msg="Claimed"
      }
        
      this.approvalservice.addJPAApproval(approval).subscribe(
        res => {
         
        }
      )
    
    alert('Claim '+this.msg+"!!")
    
  
  }


}
