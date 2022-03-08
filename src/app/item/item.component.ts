import { Item } from './../item.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item[item]',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item | null = null;
  @Input() existInCart: boolean = false;
  @Output() addToCart: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() removeFromCart: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(){
    this.addToCart.emit(this.item as Item);
  }

  onRemoveFromCart() {
    this.removeFromCart.emit(this.item as Item);
  }

}
