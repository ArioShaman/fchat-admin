import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTabsModule } from '@taiga-ui/kit';

import { SliceTypeDirectiveModule } from '@fchat-admin/shared';

import {
  WorkspacesModule,
  ShopsModule,
} from '@fchat-admin/widgets';
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
    TuiTabsModule,
    WorkspacesModule,
    ShopsModule,
  ],
})
export class DashboardModule {}
