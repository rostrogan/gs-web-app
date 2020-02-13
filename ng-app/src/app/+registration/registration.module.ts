import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationRoutes } from './registration.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { RegistrationService } from './service/registration.service';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutes,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [RegistrationService],
})
export class RegistrationModule { }
