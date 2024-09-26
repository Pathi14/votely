import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(value: string, maxLength: number): string {
    if (!value || typeof value !== 'string') {
      return value;
    }
    return value.length > maxLength ? value.slice(0, maxLength) + '...' : value;
  }

}
