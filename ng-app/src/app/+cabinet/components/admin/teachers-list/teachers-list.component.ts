import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../admin.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ak-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss']
})
export class TeachersListComponent implements OnInit {
  public isLoadingFinished = false;
  public displayedColumns: string[] = ['name', 'faculty', 'details'];
  public dataSource = new MatTableDataSource();
  public facultiesMap: Map<string, any> = new Map<string, any>();

  private _teachers: any[];

  constructor(private _adminService: AdminService) {
  }

  public ngOnInit(): void {
    this._adminService
        .getTeachers()
        .pipe(switchMap((groups) => {
          this._teachers = groups;
          return this._adminService.getFaculties();
        }))
        .subscribe((faculties) => {
          for (const faculty of faculties) {
            this.facultiesMap.set(faculty.id, faculty);
          }
          this.dataSource = new MatTableDataSource(this._teachers.map(teacher => {
            return {
              ...teacher,
              faculty: this.facultiesMap.get(teacher.faculty).abbr,
            };
          }));
          this.isLoadingFinished = true;
        });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
