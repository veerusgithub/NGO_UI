import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonorModule } from './donor/donor.module';

import { EmployeeModule } from './employee/employee.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { HomePageComponent } from './home-page/home-page.component';
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import { RaiseHelpComponent } from './needypeople/raise-help/raise-help.component';
import { ListDonationsComponent } from './donation/list-donations/list-donations.component';
import { AddDonationsComponent } from './donation/add-donations/add-donations.component';
import { DonorDonationsComponent } from './donation/donor-donations/donor-donations.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupComponent,
    LoginComponent,
    RaiseHelpComponent,
    ListDonationsComponent,
    AddDonationsComponent,
    DonorDonationsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    DonorModule,
    UserModule,
    AdminModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
