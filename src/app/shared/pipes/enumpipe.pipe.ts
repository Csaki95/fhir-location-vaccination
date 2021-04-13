import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumpipe'
})
export class EnumpipePipe implements PipeTransform {

  transform(data: Object): unknown {
    const keys = Object.keys(data);
    return keys.slice(keys.length / 2);
  }

}
