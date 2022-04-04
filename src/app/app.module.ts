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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ItemModule} from "./item/item.module";
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';

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
    AgGridModule.withComponents([]),
    FormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
