import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(obj: any, ttc?: boolean): number {
    if (ttc) {
      return obj.totalTTC();
    }

    return obj.totalHT();
  }
}
