import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Address } from '../model/Address';
import { Employee } from '../model/Employee';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage! :string;
  employeeForm : FormGroup = new FormGroup({});
  constructor( private fb : FormBuilder, private service : AdminService, private router:Router) { }

  ngOnInit(): void {

    this.employeeForm= new FormGroup({
      employeeName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),

      city : new FormControl(),
      state : new FormControl(),
      pin : new FormControl(),
      landmark : new FormControl()
    })
  }

  addEmployee(): void{

    let address: Address = new Address(
      this.employeeForm.controls.city.value,
      this.employeeForm.controls.state.value,
      this.employeeForm.controls.pin.value,
      this.employeeForm.controls.landmark.value);

    let employee: Employee = new Employee(
      this.employeeForm.controls.employeeId?.value,
      this.employeeForm.controls.employeeName.value,
      this.employeeForm.controls.email.value,
      this.employeeForm.controls.phone.value,
      this.employeeForm.controls.username.value,
      this.employeeForm.controls.password.value, address);

      this.service.addEmployee(employee).subscribe(data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.employeeForm.markAsPristine();
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
