import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {AdminService} from "../admin/admin.service";
import {Employee} from "../admin/model/Employee";

@Injectable({
  providedIn: 'root'
})
export class AllEmployeesResolver implements Resolve<Employee[]> {

  constructor(private service : AdminService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
    return this.service.listEmployee();
  }
}
