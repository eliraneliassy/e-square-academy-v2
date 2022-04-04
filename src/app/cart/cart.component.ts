import {Component, OnDestroy, OnInit} from '@angular/core';
import {StateService} from "../service/state.service";
import {Item} from "../item.interface";
import {CartService} from "../cart.service";
import {Observable, Subscription} from "rxjs";
import {CartQuery} from "./state/cart.query";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {



  // public get items(): Item[] {
  //   return this.state.shoppingCart;
  // }

  // subscription: Subscription = new Subscription();

  // cart: Item[] = [];

  cart$: Observable<Item[]>;
  constructor(
    private state: StateService,
    private cartService: CartService,
    private cartQuery: CartQuery) {
    // this.subscription = this.cartService.getShppingCart().subscribe((currentCart: Item[]) => this.cart = currentCart)
    this.cart$ = this.cartQuery.selectShoppingCart$;
  }
  ngOnInit(): void {

  }

  removeFromCart(item: Item) {
    // this.state.removeFromCart(item);

    this.cartService.removeFromCart(item);

  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
