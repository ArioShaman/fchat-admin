import { Route } from '@angular/router';

import { Paths } from '@fchat-admin/types';

export const pagesRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: Paths.dashboard,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: Paths.settings,
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  }
];
