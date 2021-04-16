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
import { Routes } from '@angular/router';
import { MultilineTextComponent } from 'src/app/components/forms/multiline-text/multiline-text.component';
import { TextComponent } from 'src/app/components/forms/text/text.component';

export const routes: Routes = [
  {
    path: '',
    component: AdditemComponent
  }
]


@NgModule({
  declarations: [
    AdditemComponent,
    ToggleButtonComponent,
    AutocompleteComponent,
    TextComponent,
    MultilineTextComponent
  ],
  imports: [
    CommonModule,
    BackgroundModule,
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    AdditemComponent
  ]
})
export class AdditemModule { }
