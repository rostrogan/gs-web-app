import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../../services/cabinet.service';

@Component({
  selector: 'ak-cabinet-menu',
  templateUrl: './cabinet-menu.component.html',
  styleUrls: ['./cabinet-menu.component.scss']
})
export class CabinetMenuComponent implements OnInit {
  public user: any;

  constructor(
    private _cabinetService: CabinetService,
  ) { }

  public ngOnInit() {
    this._cabinetService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

}
