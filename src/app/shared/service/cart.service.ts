
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  numOfCartItems: BehaviorSubject<number> = new BehaviorSubject(0)

  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`



  constructor(private _httpClient: HttpClient) {}


  // !Add Item To Cart
  addToCart(id: string): Observable<any> {
    return this._httpClient.post(
      this.baseUrl + `cart`,
      { productId: id }
    )
  }


  // !Display Cart
  loggedUserCart(): Observable<any> {
    return this._httpClient.get(this.baseUrl + `cart`);
  }


  // !Remove Item From Cart 
  removeItem(id: string): Observable<any> {
    return this._httpClient.delete(this.baseUrl + `cart/${id}`);
  }


  //! Update Count
  updateCartCount(id: string, count: number): Observable<any> {
    return this._httpClient.put(
      this.baseUrl + `cart/${id}`,
      { count: `${count}` }
    )
  }

  // !Display Cart
  clearCart(): Observable<any> {
    return this._httpClient.delete(this.baseUrl + `cart`)
  }


  // !Online Payment
  onlinePayment(shippingAddress: any, idCart: string): Observable<any> {
    return this._httpClient.post(this.baseUrl + `orders/checkout-session/${idCart}?url=http://localhost:4200
    `
      ,
      {
        shippingAddress: shippingAddress
      })
  }
}
