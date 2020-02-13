import { NgModule } from '@angular/core';
import { FooterModule } from './components/footer/footer.module';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { EntryModule } from './components/entry/entry.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { LoginModule } from './components/login/login.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FaqComponent } from './components/faq/faq.component';
import {MaterialModule} from '../shared/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [FooterModule, HeaderModule, EntryModule, LoginModule],
  declarations: [NotFoundComponent, FaqComponent],
  providers: [AuthGuard, AuthService],
})
export class CoreModule {}
