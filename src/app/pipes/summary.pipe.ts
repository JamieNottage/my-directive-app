import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, ...args: number[]): any {
    // return value.toUpperCase();
    return value.substring(0, args[0]) + '...';
  }
}
