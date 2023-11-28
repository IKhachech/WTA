import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class WtaTourGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.authService.isAdmin()) {
      // If the user is an admin, allow the route to activate
      return true;
    } else {
      // If the user is not an admin, redirect to the 'forbidden' route and deny activation
      return this.router.createUrlTree(['forbidden']);
    }
  }
}
