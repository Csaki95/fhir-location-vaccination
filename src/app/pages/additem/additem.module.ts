import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditemComponent } from './additem.component';
import { BackgroundModule } from 'src/app/components/common/background/background.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToggleButtonComponent } from 'src/app/components/forms/togglebutton/togglebutton.component';
import { AutocompleteComponent } from 'src/app/components/forms/autocomplete/autocomplete.component';



@NgModule({
  declarations: [
    AdditemComponent,
    ToggleButtonComponent,
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    BackgroundModule,
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AdditemComponent
  ]
})
export class AdditemModule { }
