import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from '../menu/menu.model';

@Pipe({
  name: 'searchFood'
})
export class SearchFoodPipe implements PipeTransform {
  // filters items by the specified key matching it with the searchText
  transform(
    items: Menu[],
    searchText: string,
    key1: string,
    key2: string,
    key3: string
  ): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      const keys = Object.keys(item);
      const isInKey1 = item[key1]
        .toString()
        .toLowerCase()
        .includes(searchText);
      const isInKey2 = item[key2]
        .toString()
        .toLowerCase()
        .includes(searchText);
      const isInKey3 = item[key3]
        .toString()
        .toLowerCase()
        .includes(searchText);
      return isInKey1 + isInKey2 + isInKey3;
    });
  }
}
