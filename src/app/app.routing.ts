import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OrderConfirmedComponent } from './order-confirmed/order-confirmed.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'foodhut',
    pathMatch: 'full'
  },
  {
    path: 'foodhut',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'order-confirmed',
    component: OrderConfirmedComponent
  },
  {
    path: '**',
    redirectTo: 'foodhut'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
