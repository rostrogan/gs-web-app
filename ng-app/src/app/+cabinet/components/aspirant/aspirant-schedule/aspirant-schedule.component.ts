import { Component, OnInit } from '@angular/core';
import { AspirantService } from '../aspirant.service';
import { CabinetService } from '../../../services/cabinet.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ak-aspirant-schedule',
  templateUrl: './aspirant-schedule.component.html',
  styleUrls: ['./aspirant-schedule.component.scss']
})
export class AspirantScheduleComponent implements OnInit {
  public displayedColumns: string[] = ['number', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  public firstWeek: any[];
  public secondWeek: any[];

  constructor(
    private _aspirantService: AspirantService,
    private _cabinetService: CabinetService,
  ) {
  }

  public ngOnInit(): void {
    this._cabinetService.getAspirantUser()
        .pipe(
          switchMap((aspirant) => {
            return this._cabinetService.getGroupInfo(aspirant.group_id);
          }),
          switchMap((group: any) => {
            return this._aspirantService.getSchedule(group.name);
          })
        )
        .subscribe((res) => {
          this.firstWeek = this.getPureDays();
          this.secondWeek = this.getPureDays();
          for (const lesson of res) {
            if (lesson.lesson_week === '1') {
              this.setLesson(lesson, this.firstWeek);
            } else {
              this.setLesson(lesson, this.secondWeek);
            }
          }
        });
  }

  private setLesson(lesson: any, week: any[]) {
    week[lesson.lesson_number - 1][this.getDayName(lesson.day_number)] = {
      lesson_name: lesson.lesson_name,
      lesson_room: lesson.lesson_room,
      lesson_type: lesson.lesson_type,
      teacher_name: lesson.teacher_name
    };
  }

  private getDayName(dayNumber: string): string {
    switch (dayNumber) {
      case '1':
        return 'monday';
      case '2':
        return 'tuesday';
      case '3':
        return 'wednesday';
      case '4':
        return 'thursday';
      case '5':
        return 'friday';
      case '6':
        return 'saturday';
    }
  }

  private getPureDays(): any[] {
    return [{number: 1}, {number: 2}, {number: 3}, {number: 4}, {number: 5}]
  }
}
