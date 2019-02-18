import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    switch (environment.currency) {
      case 'NIS':
        return value * 3.7;
      case 'EUR':
        return value * 4;
      default:
        return value;
    }

  }

}
