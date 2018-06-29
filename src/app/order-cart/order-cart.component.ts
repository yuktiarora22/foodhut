import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu/menu.model';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css']
})
export class OrderCartComponent implements OnInit {
  constructor() {}

  @Input() header: string;
  @Input() helpText: string;
  @Input() image: string;
  @Input() cartItems: Menu[];

  ngOnInit() {}
}
