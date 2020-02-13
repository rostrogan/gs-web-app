import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { RatingRoutes } from './rating.routing';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {RatingService} from './services/rating.service';
import { RatingDetailComponent } from './rating-detail/rating-detail.component';

@NgModule({
  declarations: [RatingComponent, RatingDetailComponent],
  imports: [
    CommonModule,
    RatingRoutes,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    RatingService,
  ]
})
export class RatingModule { }
