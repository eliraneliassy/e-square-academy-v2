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
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import { CountriesComponent } from './countries/countries.component';
import {AgGridModule} from "ag-grid-angular";
import {ReactiveFormsModule} from "@angular/forms";
import {ItemModule} from "./item/item.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    CountriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    ItemModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
