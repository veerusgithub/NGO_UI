import { Injectable } from '@angular/core';
import { Donor } from './model/Donor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  url : string ="/ngo-app/ngo";

  constructor(private http: HttpClient) { }

  addDonor(donor: Donor) :Observable<Donor>{
    return this.http.post<Donor>(`${this.url}/createdonor`,donor);
  }
  updateDonor(donor: Donor): Observable<Object> {
    return this.http.put(`${this.url}/modifyDonor`, donor);
  }
  getDonorById(donorId: number): Observable<Donor> {
    return this.http.get<Donor>(`${this.url}/findby/donorId/${donorId}`);
  }
  deleteDonor(donorId: number): Observable<Donor> {
    return this.http.delete<Donor>(`${this.url}/removeDonor/${donorId}`);
  }
  listDonor():Observable<Donor[]>{
    return this.http.get<Donor[]>(`${this.url}/findby/donorall`);
  }


}
