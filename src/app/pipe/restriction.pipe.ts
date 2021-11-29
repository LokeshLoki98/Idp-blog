import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restriction'
})
export class RestrictionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
