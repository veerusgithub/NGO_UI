import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AdminService} from "../../admin/admin.service";
import {Router} from "@angular/router";
import {Address} from "../../admin/model/Address";
import {Employee} from "../../admin/model/Employee";
import {Donor} from "../model/Donor";

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css']
})
export class AddDonorComponent implements OnInit {

  donorForm : FormGroup = new FormGroup({});
  constructor( private fb : FormBuilder, private service : AdminService, private router:Router) { }

  ngOnInit(): void {

    this.donorForm= new FormGroup({
      donorName: new FormControl(),
      donorEmail: new FormControl(),
      donorPhone: new FormControl(),
      donorUsername: new FormControl(),
      donorPassword: new FormControl(),

      city : new FormControl(),
      state : new FormControl(),
      pin : new FormControl(),
      landmark : new FormControl()
    })
  }

  addDonor(): void{

    let address: Address = new Address(
      this.donorForm.controls.city.value,
      this.donorForm.controls.state.value,
      this.donorForm.controls.pin.value,
      this.donorForm.controls.landmark.value);

    let donor: Donor = new Donor(
      this.donorForm.controls.donorId?.value,
      this.donorForm.controls.donorName.value,
      this.donorForm.controls.donorEmail.value,
      this.donorForm.controls.donorPhone.value,
      this.donorForm.controls.donorUsername.value,
      this.donorForm.controls.donorPassword.value, address);

   /* this.service.addDonor(donor).subscribe(data => {
      alert('Donor Added');
      this.donorForm.markAsPristine();
    })*/
  }

  back() {
    this.router.navigate(["../all-employees"])
  }

}
