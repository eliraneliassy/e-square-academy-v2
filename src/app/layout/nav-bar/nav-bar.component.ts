import {Component, OnDestroy, OnInit} from '@angular/core';
import {StateService} from "../../service/state.service";
import {ILink} from "./nav-bar.interface";
import {AuthService} from "../../auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  public get count(): number {
    return this.state.shoppingCart?.length || 0;
  }

  userName: string | null = null;
  subscription: Subscription = new Subscription();

  links: ILink[] = [
    {path: 'feed', label: 'feed'},
    {path: 'cart', label: 'cart'},
    {path: 'home', label: 'home'},
    {path: 'posts', label: 'posts'},
    {path: 'countries', label: 'countries'}
  ]
  constructor(private state:StateService, private authServie: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authServie.getUser().subscribe(user => this.userName = user);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
