import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'overview/lobby',
    loadComponent: () => import('./pages/overview/lobby/lobby').then(m => m.Lobby)
  },
  {
    path: '',
    redirectTo: 'overview/lobby',
    pathMatch: 'full'
  }
];