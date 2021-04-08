import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginFormModule { }
