import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { BackgroundModule } from 'src/app/components/common/background/background.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginFormModule } from 'src/app/components/login/login-form/login-form.module';
import { RegisterFormModule } from 'src/app/components/login/register-form/register-form.module';



@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FooterModule,
    BackgroundModule,
    FontAwesomeModule,
    LoginFormModule,
    RegisterFormModule
  ],
  exports: [ LoginComponent ]
})
export class LoginModule { }
