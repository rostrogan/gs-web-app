import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { take } from 'rxjs/operators';

import { Speciality, SPECIALITY_LIST } from '../models/speciality';
import { Faculty, FACULTY_LIST } from '../models/faculty';
import { Chair, CHAIR_LIST, CHAIR_MAP } from '../models/chair';
import { RegistrationService } from '../service/registration.service';
import { RegistrationData } from '../models/registration-data.model';

@Component({
  selector: 'ak-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public formGroup: FormGroup;
  public specialityList: Speciality[] = SPECIALITY_LIST;
  public facultyList: Faculty[] = FACULTY_LIST;
  public chairList: Chair[] = CHAIR_LIST;
  public chairMap: Map<string, Chair[]> = CHAIR_MAP;

  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _registrationService: RegistrationService,
  ) {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          surname: ['', Validators.required],
          sex: ['', Validators.required],
          dateOfBirth: ['', Validators.required],
        }),
        this._formBuilder.group({
          speciality: ['', Validators.required],
          faculty: ['', Validators.required],
          chair: ['', Validators.required]
        }),
        this._formBuilder.group({
          trainingForm: ['', Validators.required],
          payForm: ['', Validators.required],
          languageType: ['', Validators.required],
          university: ['', Validators.required],
          universityYear: ['', Validators.required],
          degreeType: ['', Validators.required],
          degreeHonor: [false, Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', Validators.required],
          publishCount: [0, Validators.required],
          averageMark: ['', Validators.required],
          indicia: [''],
          supervisor: ['', Validators.required],
          additionalInfo: [''],
          hostel: [false, Validators.required],
        })
      ]),
    });
  }

  public get facultyName(): string {
    return this.formGroup.value.formArray[1].faculty;
  }

  public get formArray(): AbstractControl | null {
    return this.formGroup.get('formArray');
  }

  public createStudent(): void {
    const registrationData: RegistrationData = {
      ...this.formGroup.value.formArray[0],
      ...this.formGroup.value.formArray[1],
      ...this.formGroup.value.formArray[2]
    };
    this._registrationService.createStudent(registrationData).subscribe(() => {
      this._snackBar.open('Ви зареєстровані', 'ОК')
        .onAction()
        .pipe(take(1))
        .subscribe(() => {
          this._router.navigateByUrl('/');
        });
    });
  }

}
