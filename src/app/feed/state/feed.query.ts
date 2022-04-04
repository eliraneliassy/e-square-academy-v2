import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {FeedState, FeedStore} from "./feed.store";
import {Observable} from "rxjs";
import {Item} from "../../item.interface";


@Injectable({ providedIn: 'root' })
export class FeedQuery extends Query<FeedState> {

  selectItems$: Observable<Item[]> = this.select('items');


  constructor(protected override store: FeedStore) {
    super(store);
  }
}
