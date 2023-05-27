import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspacesWidget } from './workspaces.widget';

import { SliceTypeDirectiveModule } from '@fchat-admin/shared';
import { WorkspaceActionsModule } from '@fchat-admin/features';

@NgModule({
  declarations: [
    WorkspacesWidget
  ],
  exports: [
    WorkspacesWidget
  ],
  imports: [
    CommonModule,
    SliceTypeDirectiveModule,
    WorkspaceActionsModule,
  ],
})
export class WorkspacesModule {}
