import { Component, OnInit } from '@angular/core';
import {StateService} from "../service/state.service";
import {Item} from "../item.interface";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {



  public get items(): Item[] {
    return this.state.shoppingCart;
  }

  constructor(private state: StateService) {
  }
  ngOnInit(): void {
  }

  removeFromCart(item: Item) {
    this.state.removeFromCart(item);
  }

}
