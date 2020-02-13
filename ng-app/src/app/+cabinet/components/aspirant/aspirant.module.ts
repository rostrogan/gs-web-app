import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspirantProfileComponent } from './aspirant-profile/aspirant-profile.component';
import { AspirantPlanComponent } from './aspirant-plan/aspirant-plan.component';
import { AspirantLessonsComponent } from './aspirant-lessons/aspirant-lessons.component';
import { AspirantScheduleComponent } from './aspirant-schedule/aspirant-schedule.component';
import { MaterialModule } from '../../../shared/material.module';
import { AspirantService } from './aspirant.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AspirantStatisticsComponent } from './aspirant-statistics/aspirant-statistics.component';

@NgModule({
  declarations: [AspirantProfileComponent, AspirantPlanComponent, AspirantLessonsComponent, AspirantScheduleComponent, AspirantStatisticsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatExpansionModule,
    NgxChartsModule
  ],
  providers: [AspirantService]
})
export class AspirantModule { }
