import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TeacherLessonsComponent } from './teacher-lessons/teacher-lessons.component';
import { TeacherScheduleComponent } from './teacher-schedule/teacher-schedule.component';
import { MaterialModule } from '../../../shared/material.module';
import {
  TeacherLessonsDetailAddMarkComponent,
  TeacherLessonsDetailComponent
} from './teacher-lessons/teacher-lessons-detail/teacher-lessons-detail.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeacherProfileComponent,
    TeacherLessonsComponent,
    TeacherScheduleComponent,
    TeacherLessonsDetailComponent,
    TeacherLessonsDetailAddMarkComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatExpansionModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  entryComponents: [TeacherLessonsDetailAddMarkComponent]
})
export class TeacherModule {
}
