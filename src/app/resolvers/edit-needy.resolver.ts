import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {map, tap} from "rxjs/operators";
import {Employee} from "../admin/model/Employee";
import {Address} from "../admin/model/Address";
import {EmployeeService} from "../employee/employee.service";
import {NeedyPeople} from "../employee/model/NeedyPeople";

@Injectable({
  providedIn: 'root'
})
export class EditNeedyResolver implements Resolve<NeedyPeople> {
  constructor(private service : EmployeeService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NeedyPeople> {
    const needyId=  Number(route.paramMap.get("needyId"));

    return this.service.getNeedyPersonById(needyId).pipe( map( data => {
      return new NeedyPeople(data.needyPersonId,data.needyPersonName,data.phone,data.familyIncome,data.username,data.password
        ,new Address(data.address.city,
          data.address.state,data.address.pin,data.address.landmark))
    }), tap(() => console.log('edit needy resolver executed')));
  }
}
