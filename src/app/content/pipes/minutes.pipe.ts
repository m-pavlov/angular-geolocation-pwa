import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutes'
})
export class MinutesPipe implements PipeTransform {

  transform(value: number): string {
    let ret = null;

    if (value) {
      const degrees: number = Math.floor(value);
      const decimal: number = value - degrees;
      const minutes: number = Math.floor( decimal * 60 );
      const seconds: number = Math.round( ( decimal - minutes / 60 ) * 3600 * 100) / 100;
      const strDegrees: string = this.toStr(degrees);
      const strMinutes: string = this.toStr(minutes);
      const strSeconds: string = this.toStr(seconds, true);

      ret = `${strDegrees}° ${strMinutes}' ${strSeconds}''`;
    }

    return ret;
  }

  toStr(value: number, isSeconds?: boolean) : string {
    let int = ('' + value).split('.')[0];

    if (int.length === 1 && value >=1 ) {
      int = int.padStart(2, '0');
    }
    let decimal = ('' + value).split('.')[1];

    if (decimal) {
      decimal = decimal.padEnd(2, '0');
    }

    return isSeconds ? `${int}.${decimal}` : int;
  }
}
