import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../loader.service';

@Injectable()
export class AddheaderInterceptor implements HttpInterceptor {

  constructor(private loader: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.showLoader();
    let modifiedReq = request.clone({
      headers: request.headers.set('token', `${localStorage.getItem('dataToken')}`)
    })

    
    return next.handle(modifiedReq).pipe(
      finalize(() => this.loader.hideLoader())
    );
  }
}
