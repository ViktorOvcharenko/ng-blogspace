import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {first, take, tap} from 'rxjs/operators';
import { getIsLoggedIn } from '../../auth/store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.store.pipe(
      select(getIsLoggedIn),
      first(isLoggedIn => isLoggedIn != undefined),
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['/auth', 'login']);
          return;
        }
      })
    );
  }
}
