import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NeedypeopleService } from 'src/app/needypeople/needypeople.service';
import { EmployeeService } from '../employee.service';
import { Address } from '../model/Address';
import { NeedyPeople } from '../model/NeedyPeople';


@Component({
  selector: 'add-needyperson',
  templateUrl: './add-needyperson.component.html',
  styles: [
  ]
})
export class AddNeedypersonComponent implements OnInit {

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage! :string;

  needyPeopleRegForm :  FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private service : EmployeeService, private router:Router) { }

  ngOnInit(): void {

    this.needyPeopleRegForm=this.fb.group({
      needyPersonName : ['',Validators.required],
      phone : ['',Validators.required],
      familyIncome : ['',Validators.required],
      username: ['',Validators.required],
      password: ['',Validators.required],
     // addressId : new FormControl(),
      city : ['',Validators.required],
      state : ['',Validators.required],
      pin : ['',Validators.required],
      landmark : ['',Validators.required],

       })
    }

    addNeedyPerson():void{
      let address: Address = new Address(
        this.needyPeopleRegForm.controls.city.value,
        this.needyPeopleRegForm.controls.state.value,
        this.needyPeopleRegForm.controls.pin.value,
        this.needyPeopleRegForm.controls.landmark.value);

      let needypeople: NeedyPeople = new NeedyPeople(
        this.needyPeopleRegForm.controls?.needyPersonId?.value,
        this.needyPeopleRegForm.controls.needyPersonName.value,
        this.needyPeopleRegForm.controls.phone.value,
        this.needyPeopleRegForm.controls.familyIncome.value,
        this.needyPeopleRegForm.controls.username.value,
        this.needyPeopleRegForm.controls.password.value,
        address);

        this.service.addNeedyPerson(needypeople).subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
            this.needyPeopleRegForm.markAsPristine();
          },
          err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
          })
    }


  back() {
    this.router.navigate(["../all-needy"])
  }

}
