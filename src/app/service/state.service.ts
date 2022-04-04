import {Injectable} from '@angular/core';
import {Item} from "../item.interface";

export const ITEMS: Item[] = [
  {
    id: 1,
    title: 'Sony PS5',
    description: 'An awesome item',
    price: 500,
    enterDate: new Date('1/1/20'),
    inStock: true,
    imgUrl: 'https://cdn.vox-cdn.com/thumbor/Vgy3FfpWvBD32CYZrcNq6itGqnw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20034840/ishMfuW.png'
  },
  {
    id: 2,
    title: 'One+ earbands',
    description: 'not so awesome item, next time buy bose qc700',
    price: 70,
    enterDate: new Date('1/1/19'),
    inStock: true,
    imgUrl: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/5997305/large/de42ac313c3f595f01f7dc4e1bc24a1f.jpg'
  }, {
    id: 3,
    title: 'Climbing rope',
    description: 'not so awesome item, next time buy bose qc700',
    price: 730,
    enterDate: new Date('1/1/19'),
    inStock: true,
    imgUrl: 'https://m.media-amazon.com/images/I/71CKLm37kmL._AC_SL1500_.jpg'

  }
];

@Injectable({
  providedIn: 'root'
})
export class StateService {
  allItems: Item[] = ITEMS;
  shoppingCart: Item[] = [];

  constructor() {
  }

  addToCart(item: Item) {
    this.shoppingCart.push(item);
    this.allItems = this.allItems.filter(i => i.id !== item.id);
  }

  removeFromCart(item: Item) {
    this.allItems.push(item);
    this.shoppingCart = this.shoppingCart.filter(i => i.id !== item.id);
  }
}
