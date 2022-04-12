import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';

@Injectable()
export class SupplierinterceptorInterceptor implements HttpInterceptor {

  constructor(private Service: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=this.Service.getToken();
      if(token){
        const req= request.clone({headers:request.headers.set('Authorization',`Bearer ${token}`)})
      return next.handle(req);
      }
    return next.handle(request);
  }
}
