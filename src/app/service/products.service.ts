import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient: HttpClient) { }

  getProduct(): Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }

  getProductDetails(id:string) :Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  
  getCategory():Observable <any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

}
