import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ShowProduct } from '../service/show-product';
import { CartService } from '../shared/service/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService,
    private _cartService: CartService,
    private _toastr: ToastrService
  ) { }

  productDetails!: ShowProduct;
  productId: string = '';

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params: any) => {
      this.productId = params.get('id')
      this._productsService.getProductDetails(this.productId).subscribe({
        next: (response) => {
          this.productDetails = response.data;
          console.log(this.productDetails);
          
        }
      })
    })
  }

  addToCart(id: string) {
    this._cartService.addToCart(id).subscribe({
      next: (response) => {
        this._toastr.success(response.message);
        this._cartService.numOfCartItems.next(response.numOfCartItems);
      }
    })
  }

  // ! Owl Carsour
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
}
