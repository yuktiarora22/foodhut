import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFood'
})
export class SearchFoodPipe implements PipeTransform {
  // filters items by the specified key matching it with the searchText
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      let returnItem;
      const keys = Object.keys(item);
      debugger;
      // return item[key].toLowerCase().includes(searchText);

      keys.forEach(key => {
        returnItem = returnItem + item[key].toLowerCase().includes(searchText);
      });

      // const builderId = it.builderId.toString().includes(searchString)
      //      const groupName = it.groupName.toLowerCase().includes(searchString.toLowerCase())
      //      const companyPersonName = it.companyPersonName.toLowerCase().includes(searchString.toLowerCase())
      //      console.log( builderId + groupName + companyPersonName);
      //      return (builderId + groupName + companyPersonName );
    });
  }
}
