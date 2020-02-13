import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CabinetService } from '../../services/cabinet.service';
import { map, switchMap } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ak-aspirants',
  templateUrl: './aspirants.component.html',
  styleUrls: ['./aspirants.component.scss']
})
export class AspirantsComponent implements OnInit {
  public isLoadingFinished = false;
  public displayedColumns: string[] = ['name', 'faculty', 'department', 'speciality', 'group_id'];
  public dataSource = new MatTableDataSource();
  public groupsMap: Map<string, any> = new Map<string, any>();

  constructor(private _cabinetService: CabinetService, private _dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this._cabinetService.getAspirants()
        .pipe(
          switchMap((aspirants) => {
            this.dataSource = new MatTableDataSource(aspirants);
            return this._cabinetService.getGroups();
          }),
        )
        .subscribe((groups) => {
          for (const group of groups) {
            this.groupsMap.set(group.id, group);
          }
          this.isLoadingFinished = true;
        });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openDialog(aspirant: any) {
    const dialogRef = this._dialog.open(AspirantsGroupAddDialogComponent, {
      width: '250px',
      data: aspirant,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'ak-aspirants-group-add',
  templateUrl: 'aspirants-group-add.html',
})
export class AspirantsGroupAddDialogComponent {
  public groups: any[] = [];
  public groupControl: FormControl = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<AspirantsGroupAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _cabinetService: CabinetService,
  ) {
    this._cabinetService
        .getDepartment(data.department)
        .pipe(
          switchMap((department) => {
            return this._cabinetService.getGroupsByDepartment(department.id);
          }),
        )
        .subscribe((groups) => {
          this.groups = groups;
        });
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public addGroup(): void {
    this._cabinetService
        .addGroupToAspirant(this.data.id, this.groupControl.value, this.data.email, this.data.first_name, this.data.last_name)
        .subscribe(() => this.dialogRef.close());
  }
}
