import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarModule } from 'src/app/components/common/navbar/navbar.module';
import { BackgroundModule } from 'src/app/components/common/background/background.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    BackgroundModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
  