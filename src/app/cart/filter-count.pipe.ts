import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCount'
})
export class FilterCountPipe implements PipeTransform {

  transform(products: any[]): any[] {
    return products.filter((item) => item.count > 0);
  }

}
