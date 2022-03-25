import { Component, OnInit, OnDestroy } from '@angular/core';
import {Item} from "src/app/interface/item/item.interface";
import {StateService} from "src/app/service/state/state.service";
import { CartService } from "src/app/service/cart/cart.service";
import { ItemComponent } from '../item/item.component';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  premission = ''
  orderId: number = 0;

  public get items(): Item[] {
    return this.state.allItems;
  }

  constructor(private state: StateService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(item: Item){
    let newItem: Item = {
      id: this.orderId++,
      title: item.title,
      description: item.description,
      price: item.price,
      enterDate: item.enterDate,
      inStock: item.inStock,
      imgUrl: item.imgUrl
    }
    console.log('ITEM', newItem);
    // this.state.addToCart(item);
    this.cartService.addToCart(newItem);
  }

}
