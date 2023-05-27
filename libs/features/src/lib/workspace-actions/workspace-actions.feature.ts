import { Component, ViewChild } from '@angular/core';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';

@Component({
  selector: 'fc-workspace-actions',
  templateUrl: './workspace-actions.feature.html',
  styleUrls: ['./workspace-actions.feature.less'],
})
export class WorkspaceActionsFeature {
  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;

  open = false;
  readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

  onClick(): void {
    this.open = false;
    this.component?.nativeFocusableElement?.focus();
  }
}
