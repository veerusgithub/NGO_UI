import { Injectable } from '@angular/core';
import { Login } from './model/login';
import { HttpClient } from '@angular/common/http';
import { Employee } from './model/Employee';
import { Observable } from 'rxjs';
import { NeedyPeople } from './model/NeedyPeople';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee:any[] = new Array();

  url : string ="/ngo-app/ngo";

  constructor(private http:HttpClient) { }

 addNeedyPerson(needypeople: NeedyPeople): Observable<NeedyPeople> {
    return this.http.post<NeedyPeople>(`${this.url}/createneedyperson`, needypeople);
  }

  deleteNeedyPerson(needyPersonId: number): Observable<NeedyPeople> {
    return this.http.delete<NeedyPeople>(`${this.url}/removeneedyperson/${needyPersonId}`);
  }
  listNeedyPerson(): Observable<NeedyPeople[]>  {
    return this.http.get<NeedyPeople[]>(`${this.url}/findall/needyperson`);
  }

  getNeedyPersonById(needyPersonId: number): Observable<NeedyPeople> {
    return this.http.get<NeedyPeople>(`${this.url}/findby/needyperson/${needyPersonId}`);

  }
  updateNeedyPerson( needypeople: NeedyPeople): Observable<NeedyPeople> {
    return this.http.put<NeedyPeople>(`${this.url}/modifyNeedyPeople`,needypeople);

}
}
