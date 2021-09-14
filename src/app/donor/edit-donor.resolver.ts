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
import {Donor} from "./model/Donor";
import {DonorService} from "./donor.service";

@Injectable({
  providedIn: 'root'
})
export class EditDonorResolver implements Resolve<Donor> {
  constructor(private service : DonorService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Donor> {
    const donorId=  Number(route.paramMap.get("donorId"));
    return this.service.getDonorById(donorId).pipe( map( data => {
      return new Donor(data.donorId,data.donorName,data.donorEmail,data.donorPhone,data.donorUsername
        ,data.donorPassword
        ,new Address(data.address.city,
          data.address.state,data.address.pin,data.address.landmark))
    }), tap(() => console.log('edit employee resolver executed')));
  }
}
