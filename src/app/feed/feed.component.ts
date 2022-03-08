import {Component, OnDestroy, OnInit} from "@angular/core";
import {Item} from "../item.interface";
import {StateService} from "../service/state.service";

@Component({
  selector: 'my-feed',
  template: `
    <ng-container *ngFor="let item of items">
      <app-item class=""
                [item]="item"
                [existInCart]="false"
                (addToCart)="addToCart($event)"
      ></app-item>

    </ng-container>
  `,
  styles: [`
    div {
      outline: red solid 2px;
    }

    .wrapper {
      background: #d4d2d2;

    }

    .in-cart {
      outline: green solid 3px;
    }
  `]
})
export class FeedComponent implements OnInit {

  public get items(): Item[] {
    return this.state.allItems;
  }

  constructor(private state: StateService) {
  }

  ngOnInit() {

  }

  addToCart(item: Item) {
    console.log('ITEM', item);
    this.state.addToCart(item);
  }
}
