import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { BackgroundModule } from 'src/app/components/common/background/background.module';
import { RegistrationComponent } from './registration.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FooterModule,
    BackgroundModule,
    RouterModule
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
