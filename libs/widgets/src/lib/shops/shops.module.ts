import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliceTypeDirectiveModule } from '@fchat-admin/shared';
import { ShopCardModule } from '@fchat-admin/entities';
import { ShopCardActionModule } from '@fchat-admin/features';


import { ShopsWidget } from './shops.widget';


@NgModule({
  declarations: [
    ShopsWidget,
  ],
  exports: [
    ShopsWidget,
  ],
  imports: [
    CommonModule,
    SliceTypeDirectiveModule,
    ShopCardModule,
    ShopCardActionModule,
  ],
})
export class ShopsModule {}
