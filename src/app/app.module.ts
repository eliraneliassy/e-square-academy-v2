import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemComponent} from './item/item.component';
import {FeedComponent} from "./feed/feed.component";
import {CartComponent} from './cart/cart.component';
import {HomeComponent} from './home/home.component';
import {LoginModule} from "../layout/login/login.module";
import {LayoutModule} from "./layout/layout.module";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    FeedComponent,
    CartComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
