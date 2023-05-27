import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarWidget } from './nav-bar.widget';

import {
  TuiSvgModule,
  TuiButtonModule,
} from '@taiga-ui/core';
import { TuiAppBarModule } from '@taiga-ui/addon-mobile';
import { TuiAccordionModule } from '@taiga-ui/kit';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';

import { SliceTypeDirectiveModule } from '@fchat-admin/shared';
import { SideBarModule } from '../side-bar';

@NgModule({
  declarations: [
    NavBarWidget
  ],
  exports: [NavBarWidget],
  imports: [
    CommonModule,
    TuiAppBarModule,
    TuiSvgModule,
    TuiButtonModule,
    TuiAccordionModule,
    TuiActiveZoneModule,
    SliceTypeDirectiveModule,
    SideBarModule
  ],
})
export class NavBarModule {}
