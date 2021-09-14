import { Component, OnInit } from '@angular/core';
import {Employee} from "../../admin/model/Employee";
import {AdminService} from "../../admin/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Donation} from "../../model/Donation";
import {TokenStorageService} from "../../services/token-storage.service";
import {User} from "../../model/user";
import {Role} from "../../model/role";

@Component({
  selector: 'app-list-donations',
  templateUrl: './list-donations.component.html',
  styleUrls: ['./list-donations.component.css']
})
export class ListDonationsComponent implements OnInit {

  donations: Donation[] = new Array<Donation>()

  constructor(private service: AdminService, private tokenStorage : TokenStorageService ,private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

    const currentUser : User = this.tokenStorage.getUser();
    let donorId : number = currentUser.id;


      this.service.allDonations(this.isDonor,donorId).subscribe( data => this.donations = data);
  }

  get isDonor() {
    const currentUser :User = this.tokenStorage.getUser();
    return currentUser && currentUser?.role?.indexOf(Role.Donor)!=-1;
  }


  addNewDonation() {
      this.router.navigate(['../add-donation']);
    }
}
