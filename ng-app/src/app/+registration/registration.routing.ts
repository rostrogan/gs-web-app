import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  }
];

export const RegistrationRoutes = RouterModule.forChild(routes);
