import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {CabinetService} from '../../services/cabinet.service';

@Component({
  selector: 'ak-approved-abiturients-list',
  templateUrl: './approved-abiturients-list.component.html',
  styleUrls: ['./approved-abiturients-list.component.scss']
})
export class ApprovedAbiturientsListComponent implements OnInit {
  public isLoadingFinished = false;
  public displayedColumns: string[] = ['name', 'faculty', 'speciality', 'details'];
  public dataSource = new MatTableDataSource();

  constructor(private _cabinetService: CabinetService) { }

  public ngOnInit(): void {
    this._cabinetService.getAbiturients().subscribe((abiturients) => {
      this.dataSource = new MatTableDataSource(abiturients);
      this.isLoadingFinished = true;
    });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
