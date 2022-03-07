import { Component, OnInit } from '@angular/core';
import {StateService} from "../service/state.service";

export interface ILink{
  path?:string;
  label?:string;
}
@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  public get count(): number {
    return this.state.shoppingCart?.length || 0;
  }
  links: ILink[] = [
    {path: 'feed', label: 'feed'},
    {path: 'cart', label: 'cart'},
    {path: 'home', label: 'home'},
  ]
  constructor(private state:StateService) { }

  ngOnInit(): void {
  }

}
