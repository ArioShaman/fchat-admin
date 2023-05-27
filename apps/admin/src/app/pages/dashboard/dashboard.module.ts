import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainPage } from './main/main.page';

@NgModule({
  declarations: [MainPage],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
