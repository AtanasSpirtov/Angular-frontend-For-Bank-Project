import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicHttpInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let localStorageExpiration = String(localStorage.getItem('expirationTime'));
    if (Number(new Date(Date.now()).getTime()) > Number(new Date(localStorageExpiration).getTime())) {
      localStorage.clear();
      return next.handle(req);
    }
    if (localStorage.getItem('username') && localStorage.getItem('basicauth')) {
      req = req.clone({
        setHeaders: {
          'Authorization': `${localStorage.getItem('basicauth')}`
        }
      })
    }

    return next.handle(req);

  }
}
