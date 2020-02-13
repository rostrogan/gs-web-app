import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../../services/cabinet.service';

@Component({
  selector: 'ak-abiturient-statistics',
  templateUrl: './abiturient-statistics.component.html',
  styleUrls: ['./abiturient-statistics.component.scss']
})
export class AbiturientStatisticsComponent implements OnInit {
  public registrationData: any[] = [];
  public abiturients: any[] = [];
  public aspirants: any[] = [];

  constructor(private _cabinetService: CabinetService) { }

  public ngOnInit(): void {
    this._cabinetService.getRegistrationData().subscribe((registrationData) => {
      this.registrationData = this.getData(registrationData);
    });
    this._cabinetService.getAbiturients().subscribe((abiturients) => {
      this.abiturients = this.getData(abiturients);
    });
    this._cabinetService.getAspirants().subscribe((aspirants) => {
      this.aspirants = this.getData(aspirants);
    });
  }

  private getData(data: any): any[] {
    const map = new Map();
    for (const card of data) {
      if (map.has(card.faculty)) {
        map.set(card.faculty, map.get(card.faculty) + 1);
      } else {
        map.set(card.faculty, 1);
      }
    }
    const regData = [];
    for (const card of map) {
      regData.push({
        name: card[0],
        value: card[1],
      });
    }
    return regData;
  }

}
