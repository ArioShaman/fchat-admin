import { Component } from '@angular/core';
import { workspaces } from './workspaces';

@Component({
  selector: 'fc-workspaces',
  templateUrl: './workspaces.widget.html',
  styleUrls: ['./workspaces.widget.less'],
})
export class WorkspacesWidget {
  workspaces = workspaces;
}
