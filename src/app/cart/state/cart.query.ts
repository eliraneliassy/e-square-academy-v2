import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {CartState, CartStore} from "./cart.store";
import {map, Observable} from "rxjs";
import {Item} from "../../item.interface";


@Injectable({ providedIn: 'root' })
export class CartQuery extends Query<CartState> {

  selectShoppingCart$: Observable<Item[]> = this.select('shoppingCart');
  selectNumItemsInCart$: Observable<number> = this.selectShoppingCart$.pipe(
    map((items: Item[]) => items.length)
  )

  constructor(protected override store: CartStore) {
    super(store);
  }



}
