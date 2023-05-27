import { Component, Input, signal } from '@angular/core';

import { Paths } from '@fchat-admin/types';
 
@Component({
  selector: 'fc-side-bar',
  templateUrl: './side-bar.widget.html',
  styleUrls: ['./side-bar.widget.less'],
})
export class SideBarWidget {
  @Input()
  opened = signal(false);

  paths = Paths

  close(): void {
    this.opened.set(false);
  }
}
