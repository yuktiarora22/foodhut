import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-rating',
  templateUrl: './search-rating.component.html',
  styleUrls: ['./search-rating.component.css']
})
export class SearchRatingComponent implements OnInit {
  constructor() {}

  @Input() searchPlaceholder: string;
  @Output() searchText = new EventEmitter();
  searchInput: string;

  ngOnInit() {}

  changeSearchText(searchInput) {
    this.searchText.emit(searchInput);
  }
}
