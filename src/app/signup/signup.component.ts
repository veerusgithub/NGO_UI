import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {Role} from "../model/role";

export interface INavLink {
  id : number;
  pathLink : string;
  label : string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  selectedNavLink! : INavLink;
  navLinks : Array<INavLink> = [
    { pathLink : '/register-donor', label : 'Donor', id: 1 },
    { pathLink : '/needy-people', label : 'Needy People', id: 2 }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {


  }

  routeToLink = () => {
    this.router.navigate([this.selectedNavLink.pathLink]);

  }


}


