import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Menu } from './menu.model';
import { Observable } from 'rxjs';
import { Constants } from '../utils/constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private menuService: MenuService) {}

  foodItems$: Observable<Menu[]>;
  textStrings = Constants.textStrings;
  itemsInCart: Menu[] = [];

  ngOnInit() {
    this.foodItems$ = this.menuService.getFoodItems();
  }

  addItemToCart(item) {
    this.itemsInCart.push(item);
  }
}
