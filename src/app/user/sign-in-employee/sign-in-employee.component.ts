import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'sign-in-employee',
  templateUrl: './sign-in-employee.component.html',
  styleUrls: ['./sign-in-employee.component.css']
})
export class SignInEmployeeComponent implements OnInit {


  employeeForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  invalidLogin: boolean = false;
  title:string='employee Login'
  constructor(private formBuilder: FormBuilder, private router: Router, private router2: ActivatedRoute, private service: UserService) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.submitted = true;
    if (this.employeeForm.invalid) {
      alert('hello')
      return;
    }
    this.service.login(this.employeeForm.value).subscribe((data:any) => {
      // alert('data: '+JSON.stringify(data["jwt"]));
      alert(JSON.stringify(data));
      sessionStorage.setItem("username", data["jwt"]);
      sessionStorage.setItem("employee-login",'1');
       this.router.navigate(['employee-dashboard']);
    },
      error => {
        alert('Invalid login/password entered');
        this.invalidLogin = true;
      })
  }
}
