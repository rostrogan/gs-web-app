import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { IUser } from '../../auth/user-inteface';

@Component({
  selector: 'ak-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isLoggedIn$: Observable<boolean>;
  public user$: Observable<IUser>;

  constructor(private _authService: AuthService) {
    this.isLoggedIn$ = this._authService.isLoggedIn$;
    this.user$ = this._authService.getUserData$();
  }

  public logout(): void {
    this._authService.logout();
  }
}
