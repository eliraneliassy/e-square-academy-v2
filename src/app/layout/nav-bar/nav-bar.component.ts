import { Component, OnInit } from '@angular/core';
import {StateService} from "../../service/state.service";
import {ILink} from "./nav-bar.interface";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public get count(): number {
    return this.state.shoppingCart?.length || 0;
  }
  links: ILink[] = [
    {path: 'feed', label: 'feed'},
    {path: 'cart', label: 'cart'},
    {path: 'home', label: 'home'},
    {path: 'posts', label: 'posts'}
  ]
  constructor(private state:StateService) { }

  ngOnInit(): void {
  }

}
