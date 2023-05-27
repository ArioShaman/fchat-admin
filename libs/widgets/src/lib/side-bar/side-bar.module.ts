import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarWidget } from './side-bar.widget';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { SliceTypeDirectiveModule } from '@fchat-admin/shared';
import { TuiLinkModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SideBarWidget
  ],
  exports: [
    SideBarWidget
  ],
  imports: [
    SliceTypeDirectiveModule,
    CommonModule,
    TuiSidebarModule,
    TuiLinkModule,
    RouterModule
  ],
})
export class SideBarModule {}
