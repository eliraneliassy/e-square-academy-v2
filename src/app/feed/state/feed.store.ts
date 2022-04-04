import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {Item} from "../../item.interface";
import {ITEMS} from "../../service/state.service";

export interface FeedState {
  items: Item[];
}

export function createInitialState(): FeedState {
  return {
    items: ITEMS
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'feed' })
export class FeedStore extends Store<FeedState> {

  constructor() {
    super(createInitialState());
  }
}
