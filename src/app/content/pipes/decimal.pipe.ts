import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value: number, isShort): string {
    const accuracy = 100 * 1000;
    let ret = null;

    if (value) {
      if (isShort) {
        ret = '' + (Math.round( value * 100 ) / 100);
      } else {
        let rounded = Math.round( value * accuracy) / accuracy;
        let str = rounded < 10 && rounded >= 1 ? '0' + rounded : '' + rounded;
  
        ret = str.padEnd(8, '0');
      }
    }

    return ret;
  }

}
