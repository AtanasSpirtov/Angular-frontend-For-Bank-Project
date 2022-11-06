import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpStatusCode
} from '@angular/common/http';
import {Router} from "@angular/router";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BasicHttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Authorization': `${localStorage.getItem("token")}`
      }
    })
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.headers.has('Authorization') && event.url.includes("/login")) {
            let token = event.headers.get('Authorization');
            window.localStorage.clear()
            window.localStorage.setItem("token", token)
          }
        }
        return event
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
