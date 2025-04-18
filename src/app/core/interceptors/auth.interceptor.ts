import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@auth/services/auth.service';
import { from, switchMap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.info('Auth interceptor');
  const authService = inject(AuthService);
  const user = authService.currentUser;
  if (!user) {
    return next(req);
  }

  return from(user.getIdToken()).pipe(
    switchMap((token) => {
      const clonedReq = req.clone({
        setHeaders: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return next(clonedReq);
    })
  );
};
