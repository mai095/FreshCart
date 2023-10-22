
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({   
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _httpClient: HttpClient, private _router: Router) {

    if (localStorage.getItem('dataToken') !== null) {
      this.decodeData()
    }

  }

  register(userData: object): Observable<any> {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, userData)
  }

  login(userData: object): Observable<any> {
     
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, userData)

  }

  logOut() {
    localStorage.removeItem('dataToken');
    this.tokenEncoded.next(null);
    this._router.navigate(['/login'])
  }



  tokenEncoded = new BehaviorSubject(null)

  decodeData() {
    let decoded = JSON.stringify(localStorage.getItem('dataToken'));
    let encoded: any = jwtDecode(decoded);
    this.tokenEncoded.next(encoded);
  }




}