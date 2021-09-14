import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { EmployeeService } from '../employee.service';
import {NeedyPeople} from "../model/NeedyPeople";
import {Address} from "../../admin/model/Address";
import {Employee} from "../../admin/model/Employee";

@Component({
  selector: 'edit-needyperson',
  templateUrl: './edit-needyperson.component.html',
  styles: [
  ]
})
export class EditNeedypersonComponent implements OnInit {

  title: string = 'Edit-NeedyPerson';
  needyPerson! : NeedyPeople;

  needyPeopleRegForm :  FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,private service: EmployeeService, private router: Router,private activatedRoute :ActivatedRoute) {
    this.activatedRoute.data.subscribe(
      (data) => (this.needyPerson = data['editNeedyPeopleResolver'])
    );
  }

  ngOnInit(): void {

    this.needyPeopleRegForm=this.fb.group({
      needyPersonId:[this.needyPerson? this.needyPerson.needyPersonId :'',Validators.required],
      needyPersonName : [this.needyPerson? this.needyPerson.needyPersonName :'',Validators.required],
      phone : [this.needyPerson? this.needyPerson.phone :'',Validators.required],
      familyIncome : [this.needyPerson? this.needyPerson.familyIncome :'',Validators.required],
      username : [this.needyPerson? this.needyPerson.username :'',Validators.required],
      password : [this.needyPerson? this.needyPerson.password :'',Validators.required],
      city:  [this.needyPerson? this.needyPerson.address.city:'', Validators.required],
      state:  [this.needyPerson? this.needyPerson.address.state:'', Validators.required],
      pin:  [this.needyPerson? this.needyPerson.address.pin:'', Validators.required],
      landmark:  [this.needyPerson? this.needyPerson.address.landmark:'', Validators.required]
       })

       let id:any=sessionStorage.getItem("editNeedyPersonId")
    this.service.getNeedyPersonById(id).subscribe(data => {
      this.needyPeopleRegForm.setValue(data);
    })
    }

  updateNeedyPerson() {
    if (this.needyPeopleRegForm.invalid) {
      return;
    }
    let address: Address = new Address(
      this.needyPeopleRegForm.controls.city.value,
      this.needyPeopleRegForm.controls.state.value,
      this.needyPeopleRegForm.controls.pin.value,
      this.needyPeopleRegForm.controls.landmark.value);

    let needyPeople: NeedyPeople = new NeedyPeople(
      this.needyPeopleRegForm.controls.needyPersonId.value,
      this.needyPeopleRegForm.controls.needyPersonName.value,
      this.needyPeopleRegForm.controls.phone.value,
      this.needyPeopleRegForm.controls.familyIncome.value,
      this.needyPeopleRegForm.controls.username.value,
      this.needyPeopleRegForm.controls.password.value, address);

    this.service.updateNeedyPerson(needyPeople).subscribe(data =>{

      this.router.navigate(['/all-needy']);
    },error=>{
      alert('There is problem')
    }
    )
}
}
