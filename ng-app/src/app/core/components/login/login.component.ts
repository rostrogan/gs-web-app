import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { take } from "rxjs/operators";

@Component({
  selector: 'ak-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _snackBar: MatSnackBar,
              private _authService: AuthService,
              private _router: Router) {
    this._authService.isLoggedIn$.subscribe((authStatus) => {
      if (authStatus) {
        this._router.navigate(['cabinet']);
      }
    });
    this.formGroup = _formBuilder.group({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  public login(): void {
    const authDetails = {
      login: this.formGroup.value.login,
      password: this.formGroup.value.password,
    };
    this._authService.login(authDetails.login, authDetails.password).subscribe(res => {
      if (res) {
        this._router.navigate(['cabinet']);
      }
    }, (error => {
      this._snackBar.open(error.message, 'ОК')
          .onAction()
          .pipe(take(1))
          .subscribe();
    }));
  }
}
