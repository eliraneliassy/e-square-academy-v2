import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {StateService} from "../../service/state.service";
import {ILink} from "./nav-bar.interface";
import {AuthService} from "../../auth.service";
import {catchError, combineLatest, map, Observable, of, Subscription} from "rxjs";
import {CartQuery} from "../../cart/state/cart.query";
import {AuthQuery} from "../../../layout/login/state/auth.query";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit, OnDestroy {

  public get count(): number {
    return this.state.shoppingCart?.length || 0;
  }

  userName$: Observable<string | null>;
  subscription: Subscription = new Subscription();

  numInCart$: Observable<number>;

  viewObj$: Observable<{userName: string | null, numInCart: number}>;

  links: ILink[] = [
    {path: 'feed', label: 'feed'},
    {path: 'cart', label: 'cart'},
    {path: 'life-cycles', label: 'life cycles'},
    {path: 'home', label: 'home'},
    {path: 'posts', label: 'posts'},
    {path: 'countries', label: 'countries'}
  ]
  constructor(
    private state:StateService,
    private authServie: AuthService,
    private cartQuery: CartQuery,
    private authQuery: AuthQuery) {
    // this.userName$ = this.authServie.getUser().pipe(
    //   catchError(() => of('Aviv'))
    // );

    this.userName$ = this.authQuery.selectName$;

    this.numInCart$ = this.cartQuery.selectNumItemsInCart$;

    this.viewObj$ = combineLatest([this.userName$, this.numInCart$]).pipe(
      map(([userName, numInCart]: [string | null, number]) => ({
        userName,
        numInCart
      }))
    );
  }


  ngOnInit(): void {

    // this.subscription = this.authServie.getUser().subscribe(user => this.userName = user);
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }



}
