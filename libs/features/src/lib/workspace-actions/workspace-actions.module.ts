import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TuiHostedDropdownModule,
  TuiDataListModule,
  TuiButtonModule,
  TuiSvgModule,
} from '@taiga-ui/core';

import { SliceTypeDirectiveModule } from '@fchat-admin/shared';

import { WorkspaceActionsFeature } from './workspace-actions.feature';

@NgModule({
  declarations: [
    WorkspaceActionsFeature,
  ],
  exports: [
    WorkspaceActionsFeature,
  ],
  imports: [
    CommonModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiButtonModule,
    TuiSvgModule,
    SliceTypeDirectiveModule,
  ],
})
export class WorkspaceActionsModule {}
