
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { ShowProduct } from '../service/show-product';
import { CartService } from '../shared/service/cart.service';
import { WishlistService } from '../service/wishlist.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  allProducts: ShowProduct[] = []
  wishListData: string[] = []
  searchTerm: string = ''

  constructor(private _productsService: ProductsService,
    private _cartService: CartService,
    private _wishlistService: WishlistService,
    private _toastr: ToastrService

  ) { }

  // ^OnInit
  ngOnInit(): void {
    this._productsService.getProduct().subscribe({
      next: (response) => this.allProducts = response.data
    })
    
    this._wishlistService.displayWishList().subscribe({
      next:(response) =>{
        const newWishListData = response.data.map( (item:any)=> item._id )
        this.wishListData =newWishListData
        
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


  // ******* Wish List ********
  // !Add To WishList
  addToWishList(id: string) {
    this._wishlistService.addToWishList(id).subscribe({
      next: (response) => {
        this.wishListData = response.data
        console.log(response)
        this._wishlistService.numberOfFavItem.next(response.data.length)
        this._toastr.success(response.message)
      }
    })
  }

  // !Remove From WishList
  removeFavItem(id: string) {
    this._wishlistService.removeFavItem(id).subscribe({
      next: (response) => {
        this.wishListData = response.data
        this._toastr.success(response.message)
      }
    })
  }
}
