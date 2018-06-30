import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from './constants';
import { Menu } from '../menu/menu.model';

@Pipe({
  name: 'filterByRating'
})
export class FilterByRatingPipe implements PipeTransform {
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
        case Constants.ratingFilters.above1:
          returnItem = item.rating >= 1;
          break;
        case Constants.ratingFilters.above2:
          returnItem = item.rating >= 2;
          break;
        case Constants.ratingFilters.above3:
          returnItem = item.rating >= 3;
          break;
        case Constants.ratingFilters.above4:
          returnItem = item.rating >= 4;
          break;
      }
      return returnItem;
    });
  }
}
