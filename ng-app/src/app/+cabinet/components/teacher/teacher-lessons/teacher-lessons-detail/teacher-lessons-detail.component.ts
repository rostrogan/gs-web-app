import { Component, Inject, OnInit } from '@angular/core';
import { CabinetService } from '../../../../services/cabinet.service';
import { ActivatedRoute } from '@angular/router';
import { map, pluck, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ak-teacher-lessons-detail',
  templateUrl: './teacher-lessons-detail.component.html',
  styleUrls: ['./teacher-lessons-detail.component.scss']
})
export class TeacherLessonsDetailComponent implements OnInit {
  public lesson: any;
  public group: any;
  public aspirants: any;

  constructor(
    private _cabinetService: CabinetService,
    private _route: ActivatedRoute,
    private _dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this._route.params
        .pipe(
          pluck('id'),
          switchMap((id) => {
            return this._cabinetService.getLesson(id);
          }),
          switchMap((lesson) => {
            this.lesson = lesson;
            return forkJoin([
              this._cabinetService.getAspirantsByGroup(lesson.group_id),
              this._cabinetService.getGroupInfo(lesson.group_id),
            ]);
          }),
          map(([aspirants, group]) => {
            this.aspirants = aspirants;
            this.group = group;
          })
        )
        .subscribe();
  }

  public addMark(aspirant: any) {
    const dialogRef = this._dialog.open(TeacherLessonsDetailAddMarkComponent, {
      width: '450px',
      data: {
        aspirant,
        lessonId: this.lesson.id
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'ak-teacher-lessons-detail-add-mark',
  templateUrl: 'teacher-lessons-detail-add-mark.html',
  styles: [`
      mat-form-field {
          width: 100%;
      }
  `],
})
export class TeacherLessonsDetailAddMarkComponent {
  public dateControl: FormControl = new FormControl(new Date(), [Validators.required]);
  public markControl: FormControl = new FormControl('');
  public absentControl: FormControl = new FormControl(false, [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<TeacherLessonsDetailAddMarkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _cabinetService: CabinetService,
  ) {
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public addLesson(): void {
    const lessonsMark = this.data.aspirant.lessons_marks ? this.data.aspirant.lessons_marks : {};
    if (lessonsMark[this.data.lessonId]) {
      lessonsMark[this.data.lessonId].push({
        date: this.dateControl.value,
        absent: this.absentControl.value,
        mark: this.markControl.value,
      });
    } else {
      lessonsMark[this.data.lessonId] = [{
        date: this.dateControl.value,
        absent: this.absentControl.value,
        mark: this.markControl.value,
      }];
    }
    this._cabinetService
        .addMarkToAspirantLesson(this.data.aspirant.id, lessonsMark)
        .subscribe(() => this.dialogRef.close());
  }
}
