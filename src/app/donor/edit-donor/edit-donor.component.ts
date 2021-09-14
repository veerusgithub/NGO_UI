import { Component, OnInit } from '@angular/core';
import {Employee} from "../../admin/model/Employee";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../admin/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Address} from "../../admin/model/Address";
import {Donor} from "../model/Donor";
import {DonorService} from "../donor.service";

@Component({
  selector: 'app-edit-donor',
  templateUrl: './edit-donor.component.html',
  styleUrls: ['./edit-donor.component.css']
})
export class EditDonorComponent implements OnInit {
  donorId!: number;
  donor! :Donor;

  donorForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private service: DonorService, private router: Router,private activatedRoute : ActivatedRoute) {
    this.activatedRoute.data.subscribe(
      (data) => (this.donor = data['editDonorResolver'])
    );

  }

  ngOnInit(): void {

    this.donorForm = this.fb.group({
      donorId:  [this.donor? this.donor.donorId:'', Validators.required],
      donorName:  [this.donor? this.donor.donorName:'', Validators.required],
      donorEmail:  [this.donor? this.donor.donorEmail:'', Validators.required],
      donorPhone:  [this.donor? this.donor.donorPhone:'', Validators.required],
      donorUsername:  [this.donor? this.donor.donorUsername:'', Validators.required],
      donorPassword:  [this.donor? this.donor.donorPassword:'', Validators.required],
      city:  [this.donor? this.donor.address.city:'', Validators.required],
      state:  [this.donor? this.donor.address.state:'', Validators.required],
      pin:  [this.donor? this.donor.address.pin:'', Validators.required],
      landmark:  [this.donor? this.donor.address.landmark:'', Validators.required]
    });
  }

  updateEmployee() {

    if (this.donorForm.invalid) {
      return;
    }
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

    this.service.updateDonor(donor)
      //.pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['../all-donors'],);
        },
        error => {
          alert(error);
        });
  }

}
