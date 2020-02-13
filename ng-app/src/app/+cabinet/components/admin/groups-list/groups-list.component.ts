import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../admin.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ak-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  public isLoadingFinished = false;
  public displayedColumns: string[] = ['name', 'faculty', 'details'];
  public dataSource = new MatTableDataSource();
  public facultiesMap: Map<string, any> = new Map<string, any>();

  private _groups: any[];

  constructor(private _adminService: AdminService) {
  }

  public ngOnInit(): void {
    this._adminService
        .getGroups()
        .pipe(switchMap((groups) => {
          this._groups = groups;
          return this._adminService.getFaculties();
        }))
        .subscribe((faculties) => {
          for (const faculty of faculties) {
            this.facultiesMap.set(faculty.id, faculty);
          }
          this.dataSource = new MatTableDataSource(this._groups.map(group => {
            return {
              ...group,
              faculty: this.facultiesMap.get(group.faculty).abbr,
            };
          }));
          this.isLoadingFinished = true;
        });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
