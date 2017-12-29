import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args && typeof args === 'object' && args[value]) {
      return args[value];
    }
    return value;
  }

}
