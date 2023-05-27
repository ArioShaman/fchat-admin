import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliceDirective } from './slice-type.directive';

@NgModule({
  declarations: [
    SliceDirective
  ],
  exports: [
    SliceDirective
  ],
  imports: [
    CommonModule,
  ],
})
export class SliceTypeDirectiveModule {}
