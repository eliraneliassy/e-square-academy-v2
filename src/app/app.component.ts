import { Item } from './item.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Item[] = [
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
    }
  ];

  shoppingCart: Item[] = [];

  addToCart(item: Item): void {
    this.shoppingCart.push(item);
  }

  removeFromCart(item: Item): void {
    const index = this.shoppingCart.findIndex(i => i.id === item.id);

    this.shoppingCart.splice(index, 1);

  }

  existInCart(id: number): boolean {
    const index = this.shoppingCart.findIndex(i => i.id === id);

    return index > -1;
  }

  
}
