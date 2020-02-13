import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../../services/cabinet.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'ak-abiturients-list',
  templateUrl: './abiturients-list.component.html',
  styleUrls: ['./abiturients-list.component.scss']
})
export class AbiturientsListComponent implements OnInit {
  public isLoadingFinished = false;
  public displayedColumns: string[] = ['name', 'faculty', 'speciality', 'details'];
  public dataSource = new MatTableDataSource();

  constructor(private _cabinetService: CabinetService) { }

  public ngOnInit(): void {
    this._cabinetService.getRegistrationData().subscribe((abiturients) => {
      this.dataSource = new MatTableDataSource(abiturients);
      this.isLoadingFinished = true;
    });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
