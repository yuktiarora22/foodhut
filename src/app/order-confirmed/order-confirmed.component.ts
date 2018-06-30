import { Component, OnInit } from '@angular/core';
import { Constants } from '../utils/constants';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.css']
})
export class OrderConfirmedComponent implements OnInit {
  constructor() {}

  textStrings = Constants.textStrings;

  ngOnInit() {}
}
