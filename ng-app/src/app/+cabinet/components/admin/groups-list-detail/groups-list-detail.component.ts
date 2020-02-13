import { Component, Inject, OnInit } from '@angular/core';
import { pluck, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ak-groups-list-detail',
  templateUrl: './groups-list-detail.component.html',
  styleUrls: ['./groups-list-detail.component.scss']
})
export class GroupsListDetailComponent implements OnInit {
  public group: any;
  public faculty: any;
  public department: any;

  constructor(
    private _route: ActivatedRoute,
    private _adminService: AdminService,
    private _dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this._route.params
        .pipe(
          pluck('groupId'),
          switchMap((groupId) => {
            return this._adminService.getGroup(groupId);
          }),
          switchMap(group => {
            this.group = group;
            return this._adminService.getFaculty(group.faculty);
          }),
          switchMap(faculty => {
            this.faculty = faculty;
            return this._adminService.getDepartment(this.group.department);
          })
        )
        .subscribe(department => {
          this.department = department;
        });
  }

  public openDialog() {
    const dialogRef = this._dialog.open(GroupsListDetailLessonAddComponent, {
      width: '450px',
      data: this.group,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'ak-groups-list-detail-lesson-add',
  templateUrl: 'groups-list-detail-lesson-add.html',
  styles: [`
      mat-form-field {
          width: 100%;
      }
  `],
})
export class GroupsListDetailLessonAddComponent {
  public teachers: any[] = [];
  public teacherControl: FormControl = new FormControl('', [Validators.required]);
  public nameControl: FormControl = new FormControl('', [Validators.required]);
  public semesterControl: FormControl = new FormControl('', [Validators.required]);
  public creditControl: FormControl = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<GroupsListDetailLessonAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _adminService: AdminService,
  ) {
    this._adminService
        .getTeachers()
        .subscribe((teachers) => {
          this.teachers = teachers;
        });
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public addLesson(): void {
    this._adminService
        .addLessonToGroup(
          this.data,
          this.teacherControl.value,
          this.nameControl.value,
          this.semesterControl.value,
          this.creditControl.value
        )
        .subscribe(() => this.dialogRef.close());
  }
}
