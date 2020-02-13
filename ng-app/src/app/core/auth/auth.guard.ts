import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) {}

  public canActivate(): Observable<boolean> {
    return this._authService.validateSession().pipe(
      switchMap((isLoggedIn) => {
        if (!isLoggedIn) {
          return this.onUnauthorized();
        }
        return of(true);
      }),
      catchError(() => this.onUnauthorized()),
    );
  }

  public onUnauthorized(): Observable<boolean> {
    this._authService.logout();
    this._router.navigate(['login']);
    return of(false);
  }
}
