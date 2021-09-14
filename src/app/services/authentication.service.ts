import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable ,of, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {User} from "../model/user";
import {Role} from "../model/role";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User >;
  public currentUser: Observable<User >;

  url : string ="/ngo-app/ngo";

  constructor(private http: HttpClient) {
    const userJson = localStorage.getItem('currentUser');
    const test : User  = userJson !== null ? JSON.parse(userJson) : new User();
      this.currentUserSubject = new BehaviorSubject<User>(test);
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User  {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string, role: string): Observable<any> {
   /*  return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions); */
    let loginUrl : string ='';
    if(role== Role.Admin){
      loginUrl='login/admin';
    }else if(role== Role.Employee){
      loginUrl='login/employee';
    }else if(role== Role.Donor){
      loginUrl='login/donor';
    }else if(role== Role.NeedyPeople){
      loginUrl='login/needy';
    }

    return this.http.get(`${this.url}/${loginUrl}/${username}/${password}`).pipe(
      /* map((emp: any) => {
        return {
          status: true,
          employeeId: emp?.empId,
        };
      }), */
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );

  }


  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(new User());
  }


}
