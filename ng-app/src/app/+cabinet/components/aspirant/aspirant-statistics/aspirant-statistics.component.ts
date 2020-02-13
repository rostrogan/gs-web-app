import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../../../services/cabinet.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ak-aspirant-statistics',
  templateUrl: './aspirant-statistics.component.html',
  styleUrls: ['./aspirant-statistics.component.scss']
})
export class AspirantStatisticsComponent implements OnInit {
  public aspirant: any;
  public group: any;
  public lessons: any;
  public lessonMarks = [];

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
          for (const key in this.aspirant.lessons_marks) {
            if (Object.prototype.hasOwnProperty.call(this.aspirant.lessons_marks, key)) {
              this.lessonMarks.push({
                name: this.lessons.get(key).name,
                array: this.aspirant.lessons_marks[key].map((mark) => {
                  return {
                    name: new Date(mark.date.seconds * 1000),
                    value: +mark.mark || 0,
                  };
                })
              });
            }
          }
        });
  }
}
