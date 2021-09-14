import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
//import { SignInComponent } from './sign-in/sign-in.component';
import { SignInAdminComponent } from './sign-in-admin/sign-in-admin.component';
import { NeedypeopleDashboardComponent } from './needypeople-dashboard/needypeople-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { SignInEmployeeComponent } from './sign-in-employee/sign-in-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { UserService } from './user.service';
import { UserHttpInterceptor } from './user-http-interceptor';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [

    //SignInComponent,
    SignInAdminComponent,
    NeedypeopleDashboardComponent,
    EmployeeDashboardComponent,
    SignInEmployeeComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    SignInAdminComponent,
    AdminDashboardComponent,
    EmployeeDashboardComponent,
    SignInEmployeeComponent
  ],

  providers: 
  [
    UserService, 
    {provide: HTTP_INTERCEPTORS, useClass: UserHttpInterceptor, multi: true}
  ]
})
export class UserModule { }
