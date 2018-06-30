import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Constants } from '../utils/constants';

@Component({
  selector: 'app-search-rating',
  templateUrl: './search-rating.component.html',
  styleUrls: ['./search-rating.component.css']
})
export class SearchRatingComponent implements OnInit {
  constructor() {}

  @Input() searchPlaceholder: string;

  @Output() searchText = new EventEmitter();
  @Output() priceFilterOutput = new EventEmitter();
  @Output() ratingFilterOutput = new EventEmitter();
  @Output() categoryFilterOutput = new EventEmitter();

  textStrings = Constants.textStrings;
  priceFilters = Constants.priceFilters;
  categoryFilters = Constants.categoryFilters;
  ratingFilters = Constants.ratingFilters;

  searchInput: string;
  priceFilter: string;
  categoryFilter: number;
  ratingFilter: string;

  ngOnInit() {}

  changeSearchText(searchInput) {
    this.searchText.emit(searchInput);
  }

  changePriceFilter(priceFilter) {
    this.priceFilterOutput.emit(priceFilter);
  }

  changeRatingFilter(ratingFilter) {
    this.ratingFilterOutput.emit(ratingFilter);
  }

  clearAllFilters() {
    this.priceFilter = this.categoryFilter = this.ratingFilter = this.searchInput = null;
    this.changePriceFilter(this.priceFilter);
    this.changeCategoryFilter(this.categoryFilter);
    this.changeRatingFilter(this.ratingFilter);
    this.changeSearchText(this.searchInput);
  }

  changeCategoryFilter(categoryFilter) {
    this.categoryFilterOutput.emit(categoryFilter);
  }
}
