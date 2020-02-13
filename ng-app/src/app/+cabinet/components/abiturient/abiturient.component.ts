import {Component, OnInit} from '@angular/core';
import {CabinetService} from '../../services/cabinet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {pluck, switchMap, take} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'ak-abiturient',
  templateUrl: './abiturient.component.html',
  styleUrls: ['./abiturient.component.scss']
})
export class AbiturientComponent implements OnInit {
  public abiturient: any;
  public isLoadingFinished = false;

  private _abiturientId: string;

  constructor(
    private _cabinetService: CabinetService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
  ) {
  }

  public ngOnInit(): void {
    this._route.params.pipe(pluck('id')).subscribe((id: string) => {
      this._abiturientId = id;
      this._cabinetService.getRegistrationCard(id).subscribe((abiturient: any) => {
        this.abiturient = abiturient.data();
        this.abiturient.language_type = this.getLanguage(this.abiturient.language_type);
        this.isLoadingFinished = true;
      });
    });
  }

  public approveRegistration(): void {
    this._cabinetService.approveRegistration(this._abiturientId, this.abiturient)
      .pipe(
        switchMap(() => {
          return this._snackBar.open('Абітурієнта зареєстровано', 'ОК').onAction();
        }),
        take(1),
      )
      .subscribe(() => {
        this._router.navigateByUrl('cabinet/registration-data');
      });
  }

  public declineRegistration(): void {
    this._cabinetService.declineRegistration(this._abiturientId)
      .pipe(
        switchMap(() => {
          return this._snackBar.open('Реєстраційна картка видалена', 'ОК').onAction();
        }),
        take(1),
      )
      .subscribe(() => {
        this._router.navigateByUrl('cabinet/registration-data');
      });
  }

  private getLanguage(lang: string): string {
    switch (lang) {
      case 'Англ.':
        return 'Англійська';
      case 'Німец.':
        return 'Німецька';
      case 'Франц.':
        return 'Французька';
      case 'Іспанс.':
        return 'Іспанська';
    }
  }
}
