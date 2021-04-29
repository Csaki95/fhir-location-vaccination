import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditemComponent } from './additem.component';
import { BackgroundModule } from 'src/app/components/common/background/background.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { TogglebuttonModule } from 'src/app/components/forms/togglebutton/togglebutton.module';
import { TextModule } from 'src/app/components/forms/text/text.module';
import { SelectsearchModule } from 'src/app/components/forms/selectsearch/selectsearch.module';
import { AddressModule } from 'src/app/components/forms/address/address.module';

export const routes: Routes = [
  {
    path: '',
    component: AdditemComponent
  }
]

@NgModule({
  declarations: [
    AdditemComponent
  ],
  imports: [
    CommonModule,
    BackgroundModule,
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TogglebuttonModule,
    TextModule,
    SelectsearchModule,
    AddressModule
  ],
  exports: [
    AdditemComponent
  ]
})
export class AdditemModule { }
