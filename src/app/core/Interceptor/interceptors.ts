import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { log } from 'console';
import { LoadingService } from '../../service/loading.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show();
    const authToken = localStorage.getItem('authToken');
console.log("teste")
    if (authToken) {

      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
      return next.handle(authReq).pipe(
        finalize(() => this.loadingService.hide()) // Desativa o spinner após a resposta
      );
    }

    return next.handle(req);

  }
}
