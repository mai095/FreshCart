import { CartDetails } from './interface/cart-details';
import { CartService } from 'src/app/shared/service/cart.service';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: CartDetails = {} as CartDetails;
  constructor(private _cartService: CartService) {}


  ngOnInit(): void {
    this.loggedUserCart()
  }


  loggedUserCart() {
    this._cartService.loggedUserCart().subscribe({
      next: (response) => this.cart = response
    });
  }

  removeItem(id: string) {
    this._cartService.removeItem(id).subscribe({
      next: (response) => {
          this.cart = response;
          this._cartService.numOfCartItems.next(response.numOfCartItems);
      }
    });
  }

  updateCartCount(id: string, count: number) {
    this._cartService.updateCartCount(id, count).subscribe({
      next: (response) => this.cart = response
    });
  }


  // onlinePayment(shippingAddress: any, idCart: string) {
  //   this._cartService.onlinePayment(shippingAddress, idCart).subscribe({
  //     next: (response) => console.log(response)

  //   });
  // }


    // !Display Cart
    clearCart(){
      this._cartService.clearCart().subscribe({
        next:(response) =>{
          this.cart = response;
          this._cartService.numOfCartItems.next(response.numOfCartItems);
        }
        
      })
    }
}
