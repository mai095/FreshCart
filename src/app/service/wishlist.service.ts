import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  numberOfFavItem: BehaviorSubject<number> = new BehaviorSubject(0)

  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`
  
  constructor(private _httpClient: HttpClient) {

    // this.displayWishList().subscribe({
    //   next: (response) => {
    //     this.numberOfFavItem.next(response.count)

    //   }
    // })
  }


  // !Add To WishList
  addToWishList(id: string): Observable<any> {
    return this._httpClient.post(this.baseUrl + `wishlist`,
      {
        productId: id
      })
  }

  // ! Display WishList
  displayWishList(): Observable<any> {
    return this._httpClient.get(this.baseUrl + `wishlist`)
  }


  // !Remove From WishList
  removeFavItem(id: string): Observable<any> {
    return this._httpClient.delete(this.baseUrl + `wishlist/${id}`)
  }
}
