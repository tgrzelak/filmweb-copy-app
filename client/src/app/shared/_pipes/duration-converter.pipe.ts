import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationConverter'
})
export class DurationConverter implements PipeTransform {
  transform(value: number): string {
     if (value > 0 && value / 60 < 1) {
       return value + ' min.';

     } else {
       return Math.floor(value / 60) + ' godz. ' + (value % 60) + ' min.';
     }
  }
}
