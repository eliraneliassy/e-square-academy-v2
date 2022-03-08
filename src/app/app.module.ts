import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemComponent} from './item/item.component';
import {FeedComponent} from "./feed/feed.component";
import {CartComponent} from './cart/cart.component';
import {HomeComponent} from './home/home.component';
import {ToolBarComponent} from './tool-bar/tool-bar.component';
import {LoginModule} from "../layout/login/login.module";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    FeedComponent,
    CartComponent,
    HomeComponent,
    ToolBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
