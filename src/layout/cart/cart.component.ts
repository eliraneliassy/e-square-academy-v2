import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from "src/app/service/state/state.service";
import { Item } from "src/app/interface/item/item.interface";
import { CartService } from "src/app/service/cart/cart.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  // public get items(): Item[] {
  //   return this.state.shoppingCart;
  // }

  subscription: Subscription = new Subscription();

  cart: Item[] = [];

  constructor(private state: StateService, private cartService: CartService) { 
    this.subscription = this.cartService.getShoppingCart().subscribe((currentCart: Item[]) => this.cart = currentCart)
  }

  ngOnInit(): void {
  }

  removeFromCart(item: Item) {
    // this.state.removeFromCart(item);
    this.cartService.removeFromCart(item);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  

}
