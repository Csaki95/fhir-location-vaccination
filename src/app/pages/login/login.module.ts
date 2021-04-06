import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { MatCardModule } from '@angular/material/card';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BackgroundModule } from 'src/app/components/background/background.module';



@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    MatCardModule,
    FormsModule,
    FooterModule,
    BackgroundModule
  ],
  exports: [ LoginComponent ]
})
export class LoginModule { }
