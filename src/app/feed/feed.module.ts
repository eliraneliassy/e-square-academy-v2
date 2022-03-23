import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PermissionModule } from '../shared/permission/permission.module';

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
    ItemModule,
    PermissionModule,
    FormsModule
  ],
})
export class FeedModule { }
