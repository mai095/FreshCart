import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Category } from '../service/category';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  constructor(private _productsService:ProductsService){}

  category:Category[]=[];


  ngOnInit(): void {
    this.getCategory()
  }

  getCategory(){
    this._productsService.getCategory().subscribe({
      next:(response) => this.category = response.data
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
          items: 8
        }
      },
      nav: true
    }
}
