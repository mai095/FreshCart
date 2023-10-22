import { Pipe, PipeTransform } from '@angular/core';
import { ShowProduct } from './service/show-product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:ShowProduct[], searchKey:string) : ShowProduct[] {
    return products.filter((product)=>
      product.title.toLowerCase().includes(searchKey.toLowerCase())
    );
  }

}
