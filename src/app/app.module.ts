import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchFoodPipe } from './utils/search-food.pipe';
import { routing } from './app.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { OrderConfirmedComponent } from './order-confirmed/order-confirmed.component';
import { HomeComponent } from './home/home.component';
import { OrderCartComponent } from './order-cart/order-cart.component';
import { SearchRatingComponent } from './search-rating/search-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchFoodPipe,
    MenuComponent,
    OrderConfirmedComponent,
    OrderCartComponent,
    SearchRatingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
