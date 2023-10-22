import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _httpClient:HttpClient) { }

  getBrand() : Observable <any> {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }


}
