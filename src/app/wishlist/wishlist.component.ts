import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../service/wishlist.service';
import { ShowProduct } from '../service/show-product';
import { CartService } from '../shared/service/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(
    private _wishlistService: WishlistService,
    private _cartService: CartService,
    private _toastr: ToastrService,


  ) { }

  wishListData: string[] = []
  allProducts: ShowProduct[] = []

  // ^OnInit
  ngOnInit(): void {
    this.displayWishList()

    this._wishlistService.displayWishList().subscribe({
      next: (response) => {
        const newWishListData = response.data.map((item: any) => item._id)
        this.wishListData = newWishListData

      }
    })
  }

  // !Display WishList
  displayWishList() {
    this._wishlistService.displayWishList().subscribe({
      next: (response) => {
        this.allProducts = response.data
      }
    })
  }


  // !Add To WishList
  addToWishList(id: string) {
    this._wishlistService.addToWishList(id).subscribe({
      next: (response) => {
        this.wishListData = response.data  
      }
    })
  }

  // !Remove From WishList
  removeFavItem(id: string) {
    this._wishlistService.removeFavItem(id).subscribe({
      next: (response) => {
        this.wishListData = response.data

        const newProduct = this.allProducts.filter((item: any) => this.wishListData.includes(item._id))
        this.allProducts = newProduct
        this._wishlistService.numberOfFavItem.next(response.data.length)
        console.log(response.data.length)
        this._toastr.success(response.message)

      }

    })
  }

  // !Add To Cart
  addToCart(id: string) {
    this._cartService.addToCart(id).subscribe({
      next: (response) => {
        this._cartService.numOfCartItems.next(response.numOfCartItems)
        this._toastr.success(response.message)

      },

    })
  }


}
