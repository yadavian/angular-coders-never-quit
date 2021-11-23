import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cc'
})
export class CcPipe implements PipeTransform {

  transform(value: unknown, code?: string): unknown {
    if (code == "USA") {
      return "+1 " + value;
    }
    else {
      return "+91 " + value;
    }
  }

}
