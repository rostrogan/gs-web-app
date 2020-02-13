import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { CabinetService } from '../../../services/cabinet.service';

@Component({
  selector: 'ak-teacher-lessons',
  templateUrl: './teacher-lessons.component.html',
  styleUrls: ['./teacher-lessons.component.scss']
})
export class TeacherLessonsComponent implements OnInit {
  public teacher: any;
  public lessons: any;
  public groups: any;

  constructor(private _cabinetService: CabinetService) { }

  public ngOnInit(): void {
    this._cabinetService.getTeacherUser()
        .pipe(
          switchMap((teacher) => {
            this.teacher = teacher;
            return forkJoin([
              this._cabinetService.getGroups(),
              this._cabinetService.getLessons()
            ]);
          })
        )
        .subscribe(([groups, lessons]) => {
          this.groups = groups.reduce((accumulator, group) => {
            return accumulator.set(group.id, group);
          }, new Map());
          this.lessons = lessons.filter(lesson => {
            return this.teacher.lessons.some((teacherLesson) => teacherLesson.lesson_id === lesson.id);
          });
        });
  }
}
