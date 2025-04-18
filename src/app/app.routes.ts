import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import(
            '@auth/login-page/login-page.component'
          ).then((m) => m.LoginPageComponent),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import(
            '@auth/reset-password-page/reset-password-page.component'
          ).then((m) => m.ResetPasswordPageComponent),
      },
      {
        path: 'otp-verification',
        loadComponent: () =>
          import(
            '@auth/otp-page/otp-page.component'
          ).then((m) => m.OtpPageComponent),
      },
    ],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./core/shared/dashboard/shell/shell.component').then(
        (m) => m.ShellComponent
      ),
    children: [
      {
        path: 'users',
        loadComponent: () =>
          import(
            '@users/user-list-page/user-list-page.component'
          ).then((m) => m.UserListPageComponent),
      },
      {
        path: 'users/create',
        loadComponent: () =>
          import(
            '@users/user-create-page/user-create-page.component'
          ).then((m) => m.UserCreatePageComponent),
      },
      {
        path: 'users/:id/edit',
        loadComponent: () =>
          import(
            '@users/user-edit-page/user-edit-page.component'
          ).then((m) => m.UserEditPageComponent),
      },
      {
        path: '**',
        redirectTo: '/dashboard/users',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
];
