import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'ak-teachers-list-add',
  templateUrl: './teachers-list-add.component.html',
  styleUrls: ['./teachers-list-add.component.scss']
})
export class TeachersListAddComponent implements OnInit {
  public faculties: any[];
  public facultiesMap: Map<string, any> = new Map<string, any>();
  public departmentsMap: Map<string, any> = new Map<string, any>();
  public teacherName: FormControl = new FormControl('', Validators.required);
  public faculty: FormControl = new FormControl('', Validators.required);
  public department: FormControl = new FormControl('', Validators.required);
  public email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public password: FormControl = new FormControl('', Validators.required);

  constructor(
    private _adminService: AdminService,
    private _snackBar: MatSnackBar,
    private _router: Router,
  ) {
  }

  public ngOnInit(): void {
    this._adminService
        .getFaculties()
        .pipe(switchMap((faculties) => {
          this.faculties = faculties;
          for (const faculty of faculties) {
            this.facultiesMap.set(faculty.id, faculty);
          }
          return this._adminService.getDepartments();
        }))
        .subscribe((departments) => {
          for (const department of departments) {
            this.departmentsMap.set(department.id, department);
          }
        });
  }

  public addTeacher(): void {
    this._adminService
        .addTeacher(
          this.teacherName.value,
          this.department.value,
          this.faculty.value,
          this.email.value,
          this.password.value
        )
        .pipe(tap(() => {
          return this._snackBar
                     .open('Викладач доданий', 'ОК')
                     .onAction()
                     .pipe(take(1));
        }))
        .subscribe(() => {
          this._router.navigateByUrl('/cabinet/teachers-list');
        });
  }
}
