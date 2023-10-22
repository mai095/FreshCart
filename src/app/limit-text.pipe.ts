import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

  transform(description:string,limit:number ): string {

    return description?.split(" ").slice(0,limit).join(" ");
  }

}
