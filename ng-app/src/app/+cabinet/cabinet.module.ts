import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CabinetComponent } from './cabinet.component';
import { CabinetRoutes } from './cabinet.routing';
import { MaterialModule } from '../shared/material.module';
import { CabinetMenuComponent } from './components/cabinet-menu/cabinet-menu.component';
import { AbiturientsListComponent } from './components/abiturients-list/abiturients-list.component';
import { CabinetService } from './services/cabinet.service';
import { AbiturientComponent } from './components/abiturient/abiturient.component';
import { ApprovedAbiturientsListComponent } from './components/approved-abiturients-list/approved-abiturients-list.component';
import { ApprovedAbiturientComponent } from './components/approved-abiturient/approved-abiturient.component';
import {
  AspirantsComponent,
  AspirantsGroupAddDialogComponent
} from './components/aspirants/aspirants.component';
import { AspirantModule } from './components/aspirant/aspirant.module';
import { TeacherModule } from './components/teacher/teacher.module';
import { AbiturientStatisticsComponent } from './components/abiturient-statistics/abiturient-statistics.component';
import { AdminModule } from './components/admin/admin.module';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    CabinetComponent,
    CabinetMenuComponent,
    AbiturientsListComponent,
    AbiturientComponent,
    ApprovedAbiturientsListComponent,
    ApprovedAbiturientComponent,
    AspirantsComponent,
    AbiturientStatisticsComponent,
    AspirantsGroupAddDialogComponent,
  ],
  entryComponents: [AspirantsGroupAddDialogComponent],
  imports: [
    CommonModule,
    CabinetRoutes,
    MaterialModule,
    ReactiveFormsModule,
    AspirantModule,
    TeacherModule,
    AdminModule,
    MatDialogModule,
    NgxChartsModule,
  ],
  providers: [
    CabinetService,
  ]
})
export class CabinetModule {
}
