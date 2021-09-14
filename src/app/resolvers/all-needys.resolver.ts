import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {EmployeeService} from "../employee/employee.service";
import {NeedyPeople} from "../employee/model/NeedyPeople";

@Injectable({
  providedIn: 'root'
})
export class AllNeedysResolver implements Resolve<NeedyPeople[]> {

  constructor(private service: EmployeeService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NeedyPeople[]> {
    return this.service.listNeedyPerson();
  }
}
