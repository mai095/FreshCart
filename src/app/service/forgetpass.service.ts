import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {

  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/auth/`

  constructor(private _httpClient: HttpClient) { }

  forgetPass(email: object): Observable<any> {
    return this._httpClient.post(this.baseUrl + `forgotPasswords`, email)
  }

  getverifyCode(resetCode: object): Observable<any> {
    return this._httpClient.post(this.baseUrl + `verifyResetCode`, resetCode)
  }


  reset(resetPass:object):Observable<any>{
    return this._httpClient.put(this.baseUrl + `resetPassword`, resetPass)
  }
}
