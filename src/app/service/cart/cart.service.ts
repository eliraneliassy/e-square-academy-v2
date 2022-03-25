import { Injectable } from '@angular/core';
import { BehaviorSubject, findIndex, Observable } from 'rxjs';
import { Item } from 'src/app/interface/item/item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private shoppingCart$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  getShoppingCart(): Observable<Item[]> 
  {
    return this.shoppingCart$.asObservable();
  }

  setShoppingCart(newCart: Item[]): void{
    this.shoppingCart$.next(newCart);
  }

  addToCart(item: Item){
    const currentCart = this.shoppingCart$.getValue();
    const newCart = [...currentCart, item];
    this.setShoppingCart(newCart);
  }

  removeFromCart(item: Item){
    const currentCart = this.shoppingCart$.getValue();
    const index = currentCart.findIndex(x => x.id === item.id)
    if(index > -1){
      const newCart = currentCart.filter(x => x.id !== item.id);
      this.setShoppingCart(newCart);
    }
  }

  constructor() { }
}
