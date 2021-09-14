import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AdminService} from "../../admin/admin.service";
import {Router} from "@angular/router";
import {DonationItem} from "../../model/DonationItem";
import {Donation} from "../../model/Donation";
import {User} from "../../model/user";
import {TokenStorageService} from "../../services/token-storage.service";
import {Role} from "../../model/role";
import {ItemType} from "../../model/ItemType";

@Component({
  selector: 'app-add-donations',
  templateUrl: './add-donations.component.html',
  styleUrls: ['./add-donations.component.css']
})
export class AddDonationsComponent implements OnInit {

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage! :string;
  itemTypes = [ItemType.MONEY,ItemType.CLOTHS,ItemType.BOOKS,ItemType.EDIBLE,ItemType.OTHERS];
  donationForm : FormGroup = new FormGroup({});
  constructor( private fb : FormBuilder, private service : AdminService, private router:Router,private tokenStorage : TokenStorageService) { }

  ngOnInit(): void {

    this.donationForm= new FormGroup({
      donationAmount: new FormControl(),
      donationDate: new FormControl(),
      donationType: new FormControl(),
      itemDescription: new FormControl(),
    })
  }

  addDonation(): void{

    const currentUser : User = this.tokenStorage.getUser();
    let donorId : number = currentUser.id;

    let donationItem: DonationItem = new DonationItem(
      0,

      this.donationForm.controls.itemDescription.value,
      this.donationForm.controls.donationType.value,
      );

    let donation: Donation = new Donation(
      0,
      this.donationForm.controls.donationAmount.value,
      this.donationForm.controls.donationDate.value,
       currentUser.id,
       donationItem);

    this.service.addDonation(donation).subscribe(data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.donationForm.markAsPristine();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      })
  }

  back() {
    this.router.navigate(["../all-employees"])
  }

}
