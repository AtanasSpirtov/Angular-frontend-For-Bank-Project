import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse, HttpStatusCode
} from '@angular/common/http';
import {Router} from "@angular/router";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BasicHttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let localStorageExpiration = localStorage.getItem('expirationTime');
    if (Number(new Date(Date.now()).getTime()) > Number(localStorageExpiration)) {
      window.localStorage.clear();
    }
    if(localStorage.length != 0) {
      if (localStorage.getItem('basicauth')) {
        req = req.clone({
          setHeaders: {
            'Authorization': `${localStorage.getItem('basicauth')}`
          }
        })
      }
    }
    return next.handle(req).pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }),
        catchError(
          (
            httpErrorResponse: HttpErrorResponse, _: Observable<HttpEvent<any>>
          ) => {
            if (httpErrorResponse.status === HttpStatusCode.Unauthorized
              || httpErrorResponse.status === HttpStatusCode.Forbidden) {
              this.router.navigate(['/errorPage'])
            }
            return throwError(httpErrorResponse);
          }
        )
      );
  }
}
