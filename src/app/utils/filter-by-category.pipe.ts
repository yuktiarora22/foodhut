import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from '../menu/menu.model';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(items: Menu[], value: number): any {
    if (!items) {
      return [];
    }
    if (value === null || value === undefined) {
      return items;
    }
    return items.filter(item => item.category === value);
  }
}
