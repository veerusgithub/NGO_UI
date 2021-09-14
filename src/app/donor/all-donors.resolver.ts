import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {DonorService} from "./donor.service";
import {Donor} from "./model/Donor";

@Injectable({
  providedIn: 'root'
})
export class AllDonorsResolver implements Resolve<Donor[]> {
  constructor(private service : DonorService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Donor[]> {
    return    this.service.listDonor();;
  }
}
