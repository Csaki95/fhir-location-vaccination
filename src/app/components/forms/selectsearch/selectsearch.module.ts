import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSearchComponent } from './selectsearch.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectSearchComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [SelectSearchComponent],
})
export class SelectsearchModule {}
