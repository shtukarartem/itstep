import { Component, ViewChild, ElementRef} from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';

  tasks:Item[] = [
    { productСode:"312", title:"Хлеб", priceOfOneItem:12, amount:2},
    { productСode:"618", title:"Молоко", priceOfOneItem:11, amount:1},
    { productСode:"5423", title:"Курица", priceOfOneItem:34, amount:1}
  ];
}
