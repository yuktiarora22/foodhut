import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Menu } from './menu.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private menuService: MenuService) {}

  foodItems$: Observable<Menu[]>;

  ngOnInit() {
    this.foodItems$ = this.menuService.getFoodItems();

    // this.menuService.getFoodItems().subscribe(res => {
    //   console.log(res);
    // });
  }
}
