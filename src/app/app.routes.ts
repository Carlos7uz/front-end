import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/login/login.component').then(c => c.LoginComponent)
    },
    {
      path: 'home',
      loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent)
    }
];
