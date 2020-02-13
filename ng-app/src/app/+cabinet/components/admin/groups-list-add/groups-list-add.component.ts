import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormControl, Validators } from '@angular/forms';
import { switchMap, take, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'ak-groups-list-add',
  templateUrl: './groups-list-add.component.html',
  styleUrls: ['./groups-list-add.component.scss']
})
export class GroupsListAddComponent implements OnInit {
  public faculties: any[];
  public facultiesMap: Map<string, any> = new Map<string, any>();
  public departmentsMap: Map<string, any> = new Map<string, any>();
  public groupName: FormControl = new FormControl('', Validators.required);
  public faculty: FormControl = new FormControl('', Validators.required);
  public department: FormControl = new FormControl('', Validators.required);

  constructor(
    private _adminService: AdminService,
    private _snackBar: MatSnackBar,
    private _router: Router,
  ) {}

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

  public addGroup(): void {
    this._adminService.addGroup(this.groupName.value, this.department.value, this.faculty.value).pipe(tap(() => {
      return this._snackBar.open('Група додана', 'ОК')
          .onAction()
          .pipe(take(1));
    })).subscribe(() => {
      this._router.navigateByUrl('/cabinet/groups-list');
    });
  }
}
