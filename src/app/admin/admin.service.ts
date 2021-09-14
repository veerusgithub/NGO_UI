import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './model/Employee';
import {map} from "rxjs/operators";
import {Donor} from "../donor/model/Donor";
import {Donation} from "../model/Donation";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url : string ="/ngo-app/ngo";

    constructor(private http: HttpClient) { }

  addEmployee(employee: Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.url}/createemployee`,employee);
  }
  updateEmployee(employee: Employee): Observable<Object> {
    return this.http.put(`${this.url}/modifyemployee`, employee);
  }
  getEmployeeById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/findby/employeeid/${employeeId}`);
  }
  deleteEmployee(employeeId: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.url}/removeemployee/${employeeId}`);
  }
  listEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.url}/findby/employeeall`);
  }
 allDonations(mine : boolean, donorId : number) :Observable<Donation[]>{
      let appendUrl : string= '';
      if(mine){
        appendUrl = `findDonation/donorId/${donorId}`
      }else{
        appendUrl =`allDonations`
      }
   return this.http.get<Donation[]>(`${this.url}/${appendUrl}`);
 }

  addDonation(donation: Donation):Observable<Donation>{
    return this.http.post<Donation>(`${this.url}/saveDonation`,donation);
  }
}
