import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {
  user:string;
  
  constructor(private router:Router) { }

  ngOnInit(): void {

    
    console.log("logs not working")
    this.user=sessionStorage.getItem('username')
    if(this.user==null)
    {
      alert('login first')
      this.router.navigate([''])
    }
  }


  Destroy()
  {
    if(confirm('ARE YOU SURE YOU WANT TO LOGOUT?'))
    sessionStorage.removeItem('username')
    
  }
}
