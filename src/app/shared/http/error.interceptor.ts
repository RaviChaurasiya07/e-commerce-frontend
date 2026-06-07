import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (request, next) =>
  next(request).pipe(
    catchError((error: unknown) => {
      const normalized = error instanceof HttpErrorResponse ? error : new HttpErrorResponse({ error });
      return throwError(() => normalized);
    }),
  );

