import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { EntryComponent } from './core/components/entry/entry.component';
import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import {FaqComponent} from './core/components/faq/faq.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'vstup',
    component: EntryComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'vstup/rating',
    loadChildren: () => import('./+rating/rating.module').then(m => m.RatingModule),
  },
  {
    path: 'cabinet',
    canActivate: [AuthGuard],
    loadChildren: () => import('./+cabinet/cabinet.module').then(m => m.CabinetModule),
  },
  {
    path: 'vstup/registration',
    loadChildren: () => import('./+registration/registration.module').then(m => m.RegistrationModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
