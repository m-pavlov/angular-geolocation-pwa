import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value: number, isRound): string {
    const accuracy = 100 * 1000;
    let ret = null;

    if (value) {
      if (isRound) {
        ret = '' + ( Math.round( value ) );
      } else {
        let rounded = Math.round( value * accuracy) / accuracy;
        let str = rounded < 10 && rounded >= 1 ? '0' + rounded : '' + rounded;
  
        ret = str.padEnd(8, '0');
      }
    }

    return ret;
  }

}
