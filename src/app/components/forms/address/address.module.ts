import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectsearchModule } from '../selectsearch/selectsearch.module';



@NgModule({
  declarations: [ AddressComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SelectsearchModule
  ],
  exports: [ AddressComponent ]
})
export class AddressModule { }
