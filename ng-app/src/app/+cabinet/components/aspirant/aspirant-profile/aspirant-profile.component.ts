import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../../../services/cabinet.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ak-aspirant-profile',
  templateUrl: './aspirant-profile.component.html',
  styleUrls: ['./aspirant-profile.component.scss']
})
export class AspirantProfileComponent implements OnInit {
  public aspirant: any;
  public group: any;
  public year: number;

  constructor(private _cabinetService: CabinetService) {
  }

  public ngOnInit(): void {
    this._cabinetService.getAspirantUser()
        .pipe(
          switchMap((aspirant) => {
            this.aspirant = aspirant;
            this.year = new Date(aspirant.create_date).getFullYear();
            return this._cabinetService.getGroupInfo(aspirant.group_id);
          }),
        )
        .subscribe((group) => {
          this.group = group;
        });
  }

}
