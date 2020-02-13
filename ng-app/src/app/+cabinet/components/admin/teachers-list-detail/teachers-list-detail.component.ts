import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'ak-teachers-list-detail',
  templateUrl: './teachers-list-detail.component.html',
  styleUrls: ['./teachers-list-detail.component.scss']
})
export class TeachersListDetailComponent implements OnInit {
  public teacher: any;
  public faculty: any;
  public department: any;

  constructor(
    private _route: ActivatedRoute,
    private _adminService: AdminService,
  ) {
  }

  ngOnInit() {
    this._route.params
        .pipe(
          pluck('teacherId'),
          switchMap((teacherId) => {
            return this._adminService.getTeacher(teacherId);
          }),
          switchMap(group => {
            this.teacher = group;
            return this._adminService.getFaculty(group.faculty);
          }),
          switchMap(faculty => {
            this.faculty = faculty;
            return this._adminService.getDepartment(this.teacher.department);
          })
        )
        .subscribe(department => {
          this.department = department;
        });
  }

}
