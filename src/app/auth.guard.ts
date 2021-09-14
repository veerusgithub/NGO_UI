import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {TokenStorageService} from "./services/token-storage.service";
import {User} from "./model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser :User = this.tokenStorage.getUser();
    if (currentUser && currentUser.username!=null) {
        // check if route is restricted by role
        if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
            // role not authorised so redirect to home page
            this.router.navigate(['/']);
            return false;
        }

        // authorised so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
}

}

