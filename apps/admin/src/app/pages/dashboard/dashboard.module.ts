import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliceTypeDirectiveModule } from '@fchat-admin/shared';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainPage } from './main/main.page';

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SliceTypeDirectiveModule,
  ],
})
export class DashboardModule {}
