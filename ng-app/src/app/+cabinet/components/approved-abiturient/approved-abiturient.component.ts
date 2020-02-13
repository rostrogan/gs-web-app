import { Component, OnInit } from '@angular/core';
import {CabinetService} from '../../services/cabinet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {pluck, switchMap, take} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'ak-approved-abiturient',
  templateUrl: './approved-abiturient.component.html',
  styleUrls: ['./approved-abiturient.component.scss']
})
export class ApprovedAbiturientComponent implements OnInit {
  public abiturient: any;
  public isLoadingFinished = false;
  public formGroup: FormGroup;

  private _abiturientId: string;

  constructor(
    private _cabinetService: CabinetService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
  ) {
    this.formGroup = _formBuilder.group({
      exam_1: new FormControl('', Validators.required),
      exam_2: new FormControl('', Validators.required),
      need_exam_3: new FormControl(false),
      exam_3: new FormControl(''),
      additional_mark: new FormControl('0', Validators.required),
    });
  }

  public ngOnInit(): void {
    this._route.params.pipe(pluck('id')).subscribe((id: string) => {
      this._abiturientId = id;
      this._cabinetService.getAbiturient(id).subscribe((abiturient: any) => {
        this.abiturient = abiturient.data();
        this.formGroup.setValue({
          exam_1: this.abiturient.exam_1 ? this.abiturient.exam_1 : '',
          exam_2: this.abiturient.exam_2 ? this.abiturient.exam_2 : '',
          need_exam_3: this.abiturient.need_exam_3 ? this.abiturient.need_exam_3 : false,
          exam_3: this.abiturient.exam_3 ? this.abiturient.exam_3 : '',
          additional_mark: this.abiturient.additional_mark ? this.abiturient.additional_mark : 0,
        });
        if (this.abiturient.need_exam_3) {
          this.formGroup.get('exam_3').enable();
        } else {
          this.formGroup.get('exam_3').disable();
        }
        this.isLoadingFinished = true;
      });
    });
  }

  public updateAbiturient(): void {
    this._cabinetService.updateAbiturient(
      this._abiturientId,
      { ...this.abiturient, ...this.formGroup.value, total_mark: this.getTotalMark() }
      )
      .pipe(
        switchMap(() => {
          return this._snackBar.open('Картку оновлено', 'ОК').onAction();
        }),
        take(1),
      )
      .subscribe();
  }

  public approveAbiturient(): void {
    this._cabinetService.approveAbiturient(this._abiturientId, this.abiturient)
      .pipe(
        switchMap(() => {
          return this._snackBar.open('Абітурієнта зараховано', 'ОК').onAction();
        }),
        take(1),
      )
      .subscribe(() => {
        this._router.navigateByUrl('cabinet/abiturients');
      });
  }

  public deleteAbiturient(): void {
    this._cabinetService.deleteAbiturient(this._abiturientId)
      .pipe(
        switchMap(() => {
          return this._snackBar.open('Абітурієнта видалено', 'ОК').onAction();
        }),
        take(1),
      )
      .subscribe(() => {
        this._router.navigateByUrl('cabinet/abiturients');
      });
  }

  public onCheckboxChange($event: MatCheckboxChange) {
    if ($event.checked) {
      this.formGroup.get('exam_3').enable();
      this.formGroup.get('exam_3').setValidators([Validators.required]);
    } else {
      this.formGroup.get('exam_3').disable();
      this.formGroup.get('exam_3').reset();
    }
  }

  public getTotalMark(): number {
    return this.formGroup.get('exam_1').value * 0.5
      + this.formGroup.get('exam_2').value * 0.3
      + this.formGroup.get('additional_mark').value * 0.15
      + this.abiturient.average_mark * 0.05;
  }
}
