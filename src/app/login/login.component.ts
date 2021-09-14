import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {Role} from "../model/role";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  error = '';
  isLoggedIn = false;
  isLoginFailed :boolean= false;
  errorMessage = '';
  roles = [Role.Admin,Role.Employee,Role.Donor,Role.NeedyPeople]

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private tokenStorage : TokenStorageService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            role:[null, Validators.required],
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }


        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value,this.f.role.value).subscribe(
          data => {
            this.tokenStorage.saveUser(data);
            this.loading = false;
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.router.navigate([this.returnUrl]);
          },
          err => {
            this.loading = false;
            this.error = err.error.message;
            this.isLoginFailed = true;
          }
        );
    }



  reloadPage(): void {
    window.location.reload();
  }

signup(){
  this.router.navigateByUrl("/signup");
}
}
