import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {AdminService} from "../admin/admin.service";
import {Employee} from "../admin/model/Employee";
import {Address} from "../admin/model/Address";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EditEmployeeResolver implements Resolve<Employee> {

  constructor(private service : AdminService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee> {
    const employeeId=  Number(route.paramMap.get("employeeId"));

    return this.service.getEmployeeById(employeeId).pipe( map( data => {
      return new Employee(data.employeeId,data.employeeName,data.email,data.phone,data.username,data.password
        ,new Address(data.address.city,
          data.address.state,data.address.pin,data.address.landmark))
    }), tap(() => console.log('edit employee resolver executed')));
  }
}
