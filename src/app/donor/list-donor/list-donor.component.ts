import { Component, OnInit } from '@angular/core';
import {Employee} from "../../admin/model/Employee";
import {AdminService} from "../../admin/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Donor} from "../model/Donor";
import {DonorService} from "../donor.service";

@Component({
  selector: 'app-list-donor',
  templateUrl: './list-donor.component.html',
  styleUrls: ['./list-donor.component.css']
})
export class ListDonorComponent implements OnInit {
  donors: Donor[] = new Array<Donor>()

  constructor(private service: DonorService, private route: ActivatedRoute, private router: Router) {
    this.route.data.subscribe(
      (data) => (this.donors = data['allDonorsResolver'])
    );
  }

  ngOnInit(): void {
    if(!this.donors){
      this.service.listDonor().subscribe( data => this.donors = data);
    }
  }

  addNewDonor(){
    this.router.navigate(['../register-donor']);
  }

  // Modify Employee
  editDonor(donor: Donor): void {
    this.router.navigate(['../edit-donor' ,donor.donorId]);
  };
  //Delete Employee
  deleteDonor(donor: Donor): void {
    alert('delete')
    this.service.deleteDonor(donor.donorId).subscribe(data=>{
      this.service.listDonor().subscribe(data=>{
        this.donors =data
      })
    },error=>{
      alert('problem deleting donor record');
    })

  }

}
