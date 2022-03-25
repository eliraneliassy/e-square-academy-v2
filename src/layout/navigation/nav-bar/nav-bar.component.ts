import { Component, OnDestroy, OnInit } from '@angular/core';
import {StateService} from "src/app/service/state/state.service";
import {ILink} from "src/app/interface/nav-bar/nav-bar.interface";
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  userName: string | null = null;
  subscription: Subscription = new Subscription();

  public get count(): number {
    return this.state.shoppingCart?.length || 0;
  }

  links: ILink[] = [
    {path: 'feed', label: 'feed'},
    {path: 'cart', label: 'cart'},
    {path: 'home', label: 'home'},
    {path: 'posts', label: 'posts'},
    {path: 'countries', label: 'countries'},
    {path: 'login', label: 'login'}
  ]

  constructor(private state:StateService, private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.getUser().subscribe(user =>
      this.userName = user)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
