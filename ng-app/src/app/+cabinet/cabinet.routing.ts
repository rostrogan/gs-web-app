import { Routes, RouterModule } from '@angular/router';

import { CabinetComponent } from './cabinet.component';
import { AbiturientsListComponent } from './components/abiturients-list/abiturients-list.component';
import { AbiturientComponent } from './components/abiturient/abiturient.component';
import { ApprovedAbiturientsListComponent } from './components/approved-abiturients-list/approved-abiturients-list.component';
import { ApprovedAbiturientComponent } from './components/approved-abiturient/approved-abiturient.component';
import { AspirantsComponent } from './components/aspirants/aspirants.component';
import { AspirantProfileComponent } from './components/aspirant/aspirant-profile/aspirant-profile.component';
import { AspirantLessonsComponent } from './components/aspirant/aspirant-lessons/aspirant-lessons.component';
import { AspirantPlanComponent } from './components/aspirant/aspirant-plan/aspirant-plan.component';
import { AspirantScheduleComponent } from './components/aspirant/aspirant-schedule/aspirant-schedule.component';
import { TeacherProfileComponent } from './components/teacher/teacher-profile/teacher-profile.component';
import { TeacherLessonsComponent } from './components/teacher/teacher-lessons/teacher-lessons.component';
import { TeacherScheduleComponent } from './components/teacher/teacher-schedule/teacher-schedule.component';
import { AbiturientStatisticsComponent } from './components/abiturient-statistics/abiturient-statistics.component';
import { GroupsListComponent } from './components/admin/groups-list/groups-list.component';
import { GroupsListAddComponent } from './components/admin/groups-list-add/groups-list-add.component';
import { GroupsListDetailComponent } from './components/admin/groups-list-detail/groups-list-detail.component';
import { TeachersListComponent } from './components/admin/teachers-list/teachers-list.component';
import { TeachersListAddComponent } from './components/admin/teachers-list-add/teachers-list-add.component';
import { TeachersListDetailComponent } from './components/admin/teachers-list-detail/teachers-list-detail.component';
import { TeacherLessonsDetailComponent } from './components/teacher/teacher-lessons/teacher-lessons-detail/teacher-lessons-detail.component';
import { AspirantStatisticsComponent } from './components/aspirant/aspirant-statistics/aspirant-statistics.component';


const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      {
        path: 'registration-data',
        component: AbiturientsListComponent,
      },
      {
        path: 'registration-data/:id',
        component: AbiturientComponent,
      },
      {
        path: 'abiturients',
        component: ApprovedAbiturientsListComponent,
      },
      {
        path: 'abiturient-statistics',
        component: AbiturientStatisticsComponent,
      },
      {
        path: 'abiturients/:id',
        component: ApprovedAbiturientComponent,
      },
      {
        path: 'aspirants',
        component: AspirantsComponent,
      },
      {
        path: 'aspirant-profile',
        component: AspirantProfileComponent,
      },
      {
        path: 'aspirant-lessons',
        component: AspirantLessonsComponent,
      },
      {
        path: 'aspirant-plan',
        component: AspirantPlanComponent,
      },
      {
        path: 'aspirant-schedule',
        component: AspirantScheduleComponent,
      },
      {
        path: 'aspirant-statistics',
        component: AspirantStatisticsComponent,
      },
      {
        path: 'teacher-profile',
        component: TeacherProfileComponent,
      },
      {
        path: 'teacher-lessons',
        component: TeacherLessonsComponent,
      },
      {
        path: 'teacher-lessons/:id',
        component: TeacherLessonsDetailComponent,
      },
      {
        path: 'teacher-schedule',
        component: TeacherScheduleComponent,
      },
      {
        path: 'groups-list',
        component: GroupsListComponent,
      },
      {
        path: 'groups-list/add',
        component: GroupsListAddComponent,
      },
      {
        path: 'groups-list/:groupId',
        component: GroupsListDetailComponent,
      },
      {
        path: 'teachers-list',
        component: TeachersListComponent,
      },
      {
        path: 'teachers-list/add',
        component: TeachersListAddComponent,
      },
      {
        path: 'teachers-list/:teacherId',
        component: TeachersListDetailComponent,
      }
    ]
  },
];

export const CabinetRoutes = RouterModule.forChild(routes);
