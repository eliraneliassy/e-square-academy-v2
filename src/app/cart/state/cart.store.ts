import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {Item} from "../../item.interface";

export interface CartState {
  shoppingCart: Item[]
}

export function createInitialState(): CartState {
  return {
    shoppingCart: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart' })
export class CartStore extends Store<CartState> {

  constructor() {
    super(createInitialState());
  }
}
