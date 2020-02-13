import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../../../services/cabinet.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ak-aspirant-lessons',
  templateUrl: './aspirant-lessons.component.html',
  styleUrls: ['./aspirant-lessons.component.scss']
})
export class AspirantLessonsComponent implements OnInit {
  public aspirant: any;
  public group: any;
  public lessons: any;

  constructor(private _cabinetService: CabinetService) {
  }

  public ngOnInit(): void {
    this._cabinetService.getAspirantUser()
        .pipe(
          switchMap((aspirant) => {
            this.aspirant = aspirant;
            return this._cabinetService.getGroupInfo(aspirant.group_id);
          }),
          switchMap((group) => {
            this.group = group;
            return this._cabinetService.getLessons();
          }),
        )
        .subscribe((lessons) => {
          const map = new Map();
          for (const lesson of lessons) {
            map.set(lesson.id, lesson);
          }
          this.lessons = map;
        });
  }
}
