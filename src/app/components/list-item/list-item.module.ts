import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [ ListItemComponent ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ ListItemComponent ]
})
export class ListItemModule { }
