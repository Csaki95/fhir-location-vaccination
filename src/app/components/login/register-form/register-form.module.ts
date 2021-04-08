import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    RegisterFormComponent
  ]
})
export class RegisterFormModule { }
