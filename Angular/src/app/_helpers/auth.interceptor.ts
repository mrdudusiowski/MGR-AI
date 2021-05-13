import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../_services/token-storage.service';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService,
              private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
      return next.handle(authReq).pipe(
        catchError(
          (err, caught) => {
            if (err.status === 401) {
              this.handleAuthError();
              return of(err);
            }
          }
        )
      );
    }
    return next.handle(authReq);
  }
  private handleAuthError() {
    this.token.signOut();
    this.router.navigateByUrl('login');
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
