import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CabinetService } from '../../../services/cabinet.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ak-aspirant-plan',
  templateUrl: './aspirant-plan.component.html',
  styleUrls: ['./aspirant-plan.component.scss']
})
export class AspirantPlanComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'count', 'form'];
  public dataSource = new MatTableDataSource([
    {
      name: 'Навчальна дисципліна 1',
      count: 8,
      form: 'Екзамен'
    }
  ]);
  public dataSource1 = new MatTableDataSource();
  public dataSource2 = new MatTableDataSource();
  public dataSource3 = new MatTableDataSource();
  public dataSource4 = new MatTableDataSource();
  public aspirant: any;
  public group: any;

  constructor(private _cabinetService: CabinetService) {
  }

  public ngOnInit(): void {
    this._cabinetService.getAspirantUser()
        .pipe(
          switchMap((aspirant) => {
            this.aspirant = aspirant;
            return this._cabinetService.getGroupInfo(aspirant.group_id);
          }),
        )
        .subscribe((group) => {
          this.group = group;
          if (group.lessons && group.lessons['1']) {
            this.dataSource1 = new MatTableDataSource(group.lessons['1'].map((lesson) => {
              return {
                name: lesson.name,
                count: 8,
                form: 'Екзамен'
              };
            }));
          }
          if (group.lessons && group.lessons['2']) {
            this.dataSource2 = new MatTableDataSource(group.lessons['2'].map((lesson) => {
              return {
                name: lesson.name,
                count: 8,
                form: 'Екзамен'
              };
            }));
          }
          if (group.lessons && group.lessons['3']) {
            this.dataSource3 = new MatTableDataSource(group.lessons['3'].map((lesson) => {
              return {
                name: lesson.name,
                count: 8,
                form: 'Екзамен'
              };
            }));
          }
          if (group.lessons && group.lessons['4']) {
            this.dataSource4 = new MatTableDataSource(group.lessons['4'].map((lesson) => {
              return {
                name: lesson.name,
                count: 8,
                form: 'Екзамен'
              };
            }));
          }
        });
  }
}
