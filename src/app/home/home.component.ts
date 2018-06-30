import { Component, OnInit } from '@angular/core';
import { Constants } from '../utils/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  textStrings = Constants.textStrings;

  ngOnInit() {}
}
