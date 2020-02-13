import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { MaterialModule } from '../../../shared/material.module';
import { AdminService } from './admin.service';
import { RouterModule } from '@angular/router';
import { GroupsListAddComponent } from './groups-list-add/groups-list-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  GroupsListDetailComponent,
  GroupsListDetailLessonAddComponent
} from './groups-list-detail/groups-list-detail.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersListAddComponent } from './teachers-list-add/teachers-list-add.component';
import { TeachersListDetailComponent } from './teachers-list-detail/teachers-list-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    GroupsListComponent,
    GroupsListAddComponent,
    GroupsListDetailComponent,
    TeachersListComponent,
    TeachersListAddComponent,
    TeachersListDetailComponent,
    GroupsListDetailLessonAddComponent,
  ],
  entryComponents: [GroupsListDetailLessonAddComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [AdminService]
})
export class AdminModule { }
