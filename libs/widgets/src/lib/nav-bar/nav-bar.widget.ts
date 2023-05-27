import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'fc-nav-bar',
  templateUrl: './nav-bar.widget.html',
  styleUrls: ['./nav-bar.widget.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarWidget {
  opened = signal(false);

  toggle(value: any): void {
    console.log('cock');

    this.opened.set(value)
  }
}
