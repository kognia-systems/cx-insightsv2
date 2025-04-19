import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@auth/auth.service';
import { from, Observable, switchMap } from 'rxjs';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.info('Auth interceptor');
  const auth = inject(Auth);

  return new Observable((observer) => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      unsub(); // Evita múltiples llamadas

      if (user) {
        try {
          const token = await user.getIdToken(true);
          const clonedReq = req.clone({
            setHeaders: {
              Accept: '*/*',
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          next(clonedReq).subscribe(observer);
        } catch (error) {
          next(req).subscribe(observer);
        }
      } else {
        next(req).subscribe(observer); // No hay usuario, sigue sin token
      }
    });
  });
};
