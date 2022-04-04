import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {AuthService} from "./auth.service";
import {AuthQuery} from "../layout/login/state/auth.query";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private authQuery: AuthQuery) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    // return this.authService.getUser().pipe(
    //   map(user => !!user)
    // );

    return this.authQuery.selectIsLoggedIn$;
  }

}
