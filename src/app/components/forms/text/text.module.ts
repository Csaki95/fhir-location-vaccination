import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [TextComponent],
})
export class TextModule {}
