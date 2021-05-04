import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarModule } from 'src/app/components/common/navbar/navbar.module';
import { BackgroundModule } from 'src/app/components/common/background/background.module';
import { RouterModule, Routes } from '@angular/router';
import { ListItemModule } from 'src/app/components/list-item/list-item.module';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NavbarModule,
    BackgroundModule,
    RouterModule.forChild(routes),
    ListItemModule
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
