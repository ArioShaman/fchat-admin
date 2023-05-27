import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIslandModule } from '@taiga-ui/kit';

import { SliceTypeDirectiveModule } from '@fchat-admin/shared';

import { ShopCardEntity } from './shop-card.entity';

@NgModule({
  declarations: [
    ShopCardEntity,
  ],
  exports: [
    ShopCardEntity,
  ],
  imports: [
    CommonModule,
    TuiIslandModule,
    SliceTypeDirectiveModule,
  ],
})
export class ShopCardModule {}
