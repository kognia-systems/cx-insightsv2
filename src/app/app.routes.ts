import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import(
            '@auth/pages/login-page/login-page.component'
          ).then((m) => m.LoginPageComponent),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import(
            '@auth/pages/reset-password-page/reset-password-page.component'
          ).then((m) => m.ResetPasswordPageComponent),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
];
