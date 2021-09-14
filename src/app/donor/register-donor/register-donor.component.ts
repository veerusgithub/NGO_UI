import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DonorService } from '../donor.service';
import { Address } from '../model/Address';
import { Donor } from '../model/Donor';
import {AdminService} from "../../admin/admin.service";

@Component({
  selector: 'register-donor',
  templateUrl: './register-donor.component.html',
  styleUrls: ['./register-donor.component.css']
})
export class RegisterDonorComponent implements OnInit {

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage! :string;
  donorForm : FormGroup = new FormGroup({});
  constructor( private fb : FormBuilder, private service : DonorService, private router:Router) { }

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

    this.service.addDonor(donor).subscribe(data => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      this.donorForm.markAsPristine();
    },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      })
  }

}
