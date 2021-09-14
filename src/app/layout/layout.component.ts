import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../services/token-storage.service";
import {User} from "../model/user";
import {Role} from "../model/role";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private tokenStorage : TokenStorageService ) { }

  ngOnInit(): void {
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
    ///this.router.navigate(['/login']);
  }

  get isAdmin() {
    const currentUser :User = this.tokenStorage.getUser();
    return currentUser && currentUser?.role?.indexOf(Role.Admin)!=-1;
  }

  get isEmployee() {
    const currentUser :User = this.tokenStorage.getUser();
    return currentUser && currentUser?.role?.indexOf(Role.Employee)!=-1;
  }

  get isDonor() {
    const currentUser :User = this.tokenStorage.getUser();
    return currentUser && currentUser?.role?.indexOf(Role.Donor)!=-1;
  }

  get isNeedy() {
    const currentUser :User = this.tokenStorage.getUser();
    return currentUser && currentUser?.role?.indexOf(Role.NeedyPeople)!=-1;
  }

}
