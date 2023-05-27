import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiButtonModule } from '@taiga-ui/core';

import { SliceTypeDirectiveModule } from '@fchat-admin/shared';

import { ShopCardActionFeature } from './shop-card-action.feature';

@NgModule({
  declarations: [
    ShopCardActionFeature,
  ],
  exports: [
    ShopCardActionFeature,
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
    SliceTypeDirectiveModule,
  ],
})
export class ShopCardActionModule {}
