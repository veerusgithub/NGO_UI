import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    if (sessionStorage.getItem("username") != null) {
      sessionStorage.removeItem("username");
      this.router.navigate(['login-employee']);
    }
  }

  loggedin(){
    return sessionStorage.getItem("username")
  }
}


