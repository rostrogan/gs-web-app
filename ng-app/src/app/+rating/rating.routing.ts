import { Routes, RouterModule } from '@angular/router';

import { RatingComponent } from './rating.component';
import { RatingDetailComponent } from './rating-detail/rating-detail.component';

const routes: Routes = [
  {
    path: '',
    component: RatingComponent
  },
  {
    path: ':id',
    component: RatingDetailComponent,
  }
];

export const RatingRoutes = RouterModule.forChild(routes);
