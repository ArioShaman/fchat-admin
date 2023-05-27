import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliceDirective } from '@fchat-admin/shared';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainPage } from './main/main.page';

@NgModule({
  declarations: [
    MainPage,
    SliceDirective
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
})
export class DashboardModule {}
