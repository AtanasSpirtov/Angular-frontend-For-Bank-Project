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
    if(localStorage.length == 0) {
      return next.handle(req).pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }),
        catchError(
          (
            httpErrorResponse: HttpErrorResponse, _: Observable<HttpEvent<any>>
          ) => {
            if (httpErrorResponse.status === HttpStatusCode.Unauthorized) {
              this.router.navigate(['/login'])
            }
            return throwError(httpErrorResponse);
          }
        )
      );
    }
    else {
      if (Number(new Date(Date.now()).getTime()) > Number(localStorageExpiration)) {
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('basicauth');
        return next.handle(req);
      }
      if (localStorage.getItem('basicauth')) {
        req = req.clone({
          setHeaders: {
            'Authorization': `${localStorage.getItem('basicauth')}`
          }
        })
      }
    }

    return next.handle(req);
  }
}
