import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  } 
  addNeedyPerson():void{
    this.router.navigate(['/add-needyperson'])
  }
  login(): void{
    this.router.navigate(['login'])
  }
  addEmployee():void{
    this.router.navigate(['/add-employee'])
  }
  addDonor(): void{
    this.router.navigate(['/register-donor']);
  }
  listNeedyPerson(): void {
    this.router.navigate(['/list-needyperson'])
  }
  listEmployee(): void {
    this.router.navigate(['/list-employee'])
  }
  loggedin(){
    return sessionStorage.getItem('username')
}
}
