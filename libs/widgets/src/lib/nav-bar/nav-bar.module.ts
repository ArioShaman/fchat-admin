import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarWidget } from './nav-bar.widget';

import {
  TuiSvgModule,
  TuiButtonModule,
} from '@taiga-ui/core';
import { TuiAppBarModule, TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiAccordionModule } from '@taiga-ui/kit';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';

import { SliceDirective } from '@fchat-admin/shared';

@NgModule({
  declarations: [
    NavBarWidget,
    SliceDirective
  ],
  exports: [NavBarWidget],
  imports: [
    CommonModule,
    TuiAppBarModule,
    TuiSvgModule,
    TuiButtonModule,
    TuiAccordionModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
  ],
})
export class NavBarModule {}
