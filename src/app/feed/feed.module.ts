import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import {FeedComponent} from "./feed.component";
import {ItemModule} from "../item/item.module";


@NgModule({
  declarations: [
    FeedComponent,

  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    ItemModule
  ]
})
export class FeedModule { }
