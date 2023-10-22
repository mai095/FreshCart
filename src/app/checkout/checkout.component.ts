import { Component } from '@angular/core';
import { CartService } from '../shared/service/cart.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartId:string=''
  shippingAddress:FormGroup = new FormGroup({
    details :new FormControl(null),
    phone :new FormControl(null),
    city :new FormControl(null),
  })
  constructor(private _cartService: CartService,
    private _activatedRoute:ActivatedRoute,
    private _toastr:ToastrService,
    
   
    ) {
    this._activatedRoute.paramMap.subscribe((res:any)=>{
      this.cartId = res.params.cartId
    })
   }
  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`


  handelOnlinePayment(shippingAddress: FormGroup) {
    this._cartService.onlinePayment(shippingAddress.value, this.cartId).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          // window.location.href = response.session.url
          window.open(response.session.url)
        }
      },
      error: (err) =>{ 
      this._toastr.error(err)}

    })
  }

  
  
}
