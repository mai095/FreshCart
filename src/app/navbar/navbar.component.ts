import { WishlistService } from '../service/wishlist.service';
import { CartService } from '../shared/service/cart.service';
import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin = false;
  cartNumber!: number;
  favItem!: number;

  constructor(
    private _authenticationService: AuthenticationService,
    private _cartService: CartService,
    private _wishlistService: WishlistService,
  ) { }
    
    ngOnInit(): void {
    
      this._authenticationService.tokenEncoded.subscribe({
        next: () => {
          if (this._authenticationService.tokenEncoded.getValue() !== null) {
            this.isLogin = true;
            this._cartService.loggedUserCart().subscribe({
              next: (res) => {
                this._cartService.numOfCartItems.next(res.numOfCartItems);
                this.cartNumber = res.numOfCartItems;
              }
            });
            this._wishlistService.displayWishList().subscribe({
              next: (response) => {
                this._wishlistService.numberOfFavItem.next(response.count);
                this.favItem = response.count;
              }
            })
          } else {
            this.isLogin = false;
          }
        }
      });
  }

  logOut() {
    this._authenticationService.logOut();
  }
}
