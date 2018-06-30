import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from './constants';
import { Menu } from '../menu/menu.model';

@Pipe({
  name: 'filterByPrice'
})
export class FilterByPricePipe implements PipeTransform {
  transform(items: Menu[], value: string): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(item => {
      let returnItem;
      switch (value) {
        case Constants.priceFilters.below100:
          returnItem = item.price < 100;
          break;
        case Constants.priceFilters.between100to200:
          returnItem = item.price >= 100 && item.price < 200;
          break;
        case Constants.priceFilters.between200to300:
          returnItem = item.price >= 200 && item.price < 300;
          break;
        case Constants.priceFilters.above300:
          returnItem = item.price > 300;
          break;
      }
      return returnItem;
    });
  }
}
