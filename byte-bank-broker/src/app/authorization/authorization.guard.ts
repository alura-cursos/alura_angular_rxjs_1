import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';

type canActivateReturn = Observable<boolean> | Promise<boolean> | boolean;

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard
  implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): canActivateReturn {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): canActivateReturn {
    if (this.authService.isUserAuthenticated()) {
      return true;
    }
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): canActivateReturn {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): canActivateReturn {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }
}
