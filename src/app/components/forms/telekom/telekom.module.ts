import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelekomComponent } from './telekom.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectsearchModule } from '../selectsearch/selectsearch.module';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [
    TelekomComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SelectsearchModule,
    TextModule
  ],
  exports: [
    TelekomComponent
  ]
})
export class TelekomModule { }
