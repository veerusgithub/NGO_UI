import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AdminService } from '../admin.service';
import { Address } from '../model/Address';
import { Employee } from '../model/Employee';

@Component({
  selector: 'edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeId!: number;
  employee! :Employee;

   employeeForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private service: AdminService, private router: Router,private activatedRoute : ActivatedRoute) {
    this.activatedRoute.data.subscribe(
      (data) => (this.employee = data['editEmployeeResolver'])
    );

  }

  ngOnInit(): void {

  this.employeeForm = this.fb.group({
    employeeId:  [this.employee? this.employee.employeeId:'', Validators.required],
    employeeName:  [this.employee? this.employee.employeeName:'', Validators.required],
    email:  [this.employee? this.employee.email:'', Validators.required],
    phone:  [this.employee? this.employee.phone:'', Validators.required],
    username:  [this.employee? this.employee.username:'', Validators.required],
    password:  [this.employee? this.employee.password:'', Validators.required],
    city:  [this.employee? this.employee.address.city:'', Validators.required],
    state:  [this.employee? this.employee.address.state:'', Validators.required],
    pin:  [this.employee? this.employee.address.pin:'', Validators.required],
    landmark:  [this.employee? this.employee.address.landmark:'', Validators.required]
  });

  let employeeId:any=localStorage.getItem("editEmployeeId")

  }

  updateEmployee() {

    if (this.employeeForm.invalid) {
      return;
    }
    let address: Address = new Address(
      this.employeeForm.controls.city.value,
      this.employeeForm.controls.state.value,
      this.employeeForm.controls.pin.value,
      this.employeeForm.controls.landmark.value);

    let employee: Employee = new Employee(
      this.employeeForm.controls.employeeId.value,
      this.employeeForm.controls.employeeName.value,
      this.employeeForm.controls.email.value,
      this.employeeForm.controls.phone.value,
      this.employeeForm.controls.username.value,
      this.employeeForm.controls.password.value, address);

    this.service.updateEmployee(employee)
      //.pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['../all-employees'],);
        },
        error => {
          alert(error);
        });
  }
}


