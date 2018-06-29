import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from './menu.model';
import { Constants } from '../utils/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getFoodItems(): Observable<Menu[]> {
    return this.http.get(Constants.APIEndpoints.getFoodItems) as Observable<
      Menu[]
    >;
  }
}
