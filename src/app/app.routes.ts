import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./features/login/login.component').then(c => c.LoginComponent)
    },
    {
      path: '',
      loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent)
    },
    {
      path: 'inc-home',
      loadComponent: () => import('./features/inc-home/inc-home.component').then(c => c.IncHomeComponent)
    },
    {
      path: 'oportunidades',
      loadComponent: () => import('./features/inc-oportunidades/inc-oportunidades.component').then(c => c.IncOportunidadesComponent)
    },
    {
      path: 'nova-oportunidade',
      loadComponent: () => import('./features/inc-new-opt/inc-new-opt.component').then(c => c.IncNewOptComponent)
    },
    {
      path: 'inc-profile',
      loadComponent: () => import('./features/inc-profile/inc-profile.component').then(c => c.IncProfileComponent)
    },
    {
      path: 'jobs',
      loadComponent: () => import('./features/jobs/jobs.component').then(c => c.JobsComponent)
    },
];
