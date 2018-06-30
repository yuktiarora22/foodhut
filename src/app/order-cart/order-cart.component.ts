import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  AfterContentChecked,
  AfterContentInit
} from '@angular/core';
import { Menu } from '../menu/menu.model';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css']
})
export class OrderCartComponent implements OnInit, AfterContentChecked {
  constructor() {}

  @Input() header: string;
  @Input() helpText: string;
  @Input() image: string;
  @Input() cartItems: Menu[];

  subTotal: number;

  ngOnInit() {}

  ngAfterContentChecked() {
    if (this.cartItems.length) {
      this.subTotal = 0;
      this.cartItems.forEach(item => {
        this.subTotal += item.price;
      });
      this.subTotal = parseFloat(this.subTotal.toFixed(2));
    }
  }

  removeItem(index) {
    this.cartItems.splice(index, 1);
  }
}
