import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEmployeeComponent } from "./admin/add-employee/add-employee.component";
import { EditEmployeeComponent } from "./admin/edit-employee/edit-employee.component";
import { ListEmployeeComponent } from "./admin/list-employee/list-employee.component";
import { RegisterDonorComponent } from "./donor/register-donor/register-donor.component";
import { AddNeedypersonComponent } from "./employee/add-needyperson/add-needyperson.component";
import { EditNeedypersonComponent } from "./employee/edit-needyperson/edit-needyperson.component";
import { ListNeedypersonComponent } from "./employee/list-needyperson/list-needyperson.component";
import { AdminDashboardComponent } from "./user/admin-dashboard/admin-dashboard.component";
import { EmployeeDashboardComponent } from "./user/employee-dashboard/employee-dashboard.component";
import { SignInAdminComponent } from "./user/sign-in-admin/sign-in-admin.component";
import { SignInEmployeeComponent } from "./user/sign-in-employee/sign-in-employee.component";
import {LayoutComponent} from "./layout/layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {EditEmployeeResolver} from "./resolvers/edit-employee.resolver";
import {AllEmployeesResolver} from "./resolvers/all-employees.resolver";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
import {ListDonorComponent} from "./donor/list-donor/list-donor.component";
import {AllDonorsResolver} from "./donor/all-donors.resolver";
import {EditDonorComponent} from "./donor/edit-donor/edit-donor.component";
import {EditDonorResolver} from "./donor/edit-donor.resolver";
import {AllNeedysResolver} from "./resolvers/all-needys.resolver";
import {EditNeedyResolver} from "./resolvers/edit-needy.resolver";
import {AddDonationsComponent} from "./donation/add-donations/add-donations.component";
import {ListDonationsComponent} from "./donation/list-donations/list-donations.component";

const routes: Routes = [

  {
    path :  '',
    component :LayoutComponent,
    canActivate :[AuthGuard],
    children : [
      { path :'',redirectTo :'home',pathMatch : 'full'},
      { path : 'home' , component : HomePageComponent},
      { path : 'add-employee', component: AddEmployeeComponent},
      { path : 'all-employees', component : ListEmployeeComponent, resolve : {
          allEmployeeResolver : AllEmployeesResolver
        }},
      { path : 'edit-employee/:employeeId', component : EditEmployeeComponent , resolve : {
          editEmployeeResolver : EditEmployeeResolver
        }},

      {path:'register-donor',component:RegisterDonorComponent},
      {path : 'all-donors', component :  ListDonorComponent, resolve : {
          allDonorsResolver : AllDonorsResolver
        }},
      {path: 'edit-donor/:donorId', component: EditDonorComponent, resolve : {
          editDonorResolver : EditDonorResolver
        }},
      { path : 'add-needy', component: AddNeedypersonComponent},
      { path : 'all-needy', component : ListNeedypersonComponent, resolve : {
          allNeedyPersonResolver : AllNeedysResolver
        }},
      { path : 'edit-needy/:needyId', component : EditNeedypersonComponent , resolve : {
          editNeedyPeopleResolver : EditNeedyResolver
        }},
      { path : 'all-donations', component: ListDonationsComponent},
      { path : 'add-donation', component : AddDonationsComponent}
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },

/*
    { path: '', redirectTo: '', pathMatch: 'full'  },
*/
    { path: 'add-needyperson', component: AddNeedypersonComponent, pathMatch: 'full'},
    { path: 'login-admin', component: SignInAdminComponent, pathMatch: 'full'},
    { path: 'login-employee', component: SignInEmployeeComponent, pathMatch: 'full'},

//Adminlogin

//EmployeeLogin
    {path:'add-needyperson',component:AddNeedypersonComponent,pathMatch:'full'},
    {path:'edit-needyperson',component:EditNeedypersonComponent,pathMatch:'full'},
//Donor

//NeedyPerson
    {path:'list-needyperson',component:ListNeedypersonComponent,pathMatch:'full'},
  { path: '**', redirectTo: '' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
