import { NgModule } from '@angular/core';
import { EntryComponent } from './entry.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EntryComponent],
  imports: [CommonModule, MaterialModule, RouterModule]
})
export class EntryModule {}
