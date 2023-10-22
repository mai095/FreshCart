import { BrandDetails } from './brand-details';
import { Component, OnInit } from '@angular/core';
import { BrandService } from './brand.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  constructor(private _brandService: BrandService) { }
  allBrand: BrandDetails[] = []
 
  ngOnInit(): void {
    this.getBrand()


  }

  getBrand() {
    this._brandService.getBrand().subscribe({
      next: (response) => {
        this.allBrand = response.data
      }
    })
  }

  clickImage(image:string) {
    Swal.fire(
      {

        imageUrl:image,
       
      }
    )

  }



}
