import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginModule } from "../layout/login/login.module";
import { HttpClientModule } from "@angular/common/http";
import { CartModule } from 'src/layout/cart/cart.module';
import { CountiresModule } from 'src/layout/countires/countires.module';
import { FeedModule } from 'src/layout/feed/feed.module';
import { NavigationModule } from 'src/layout/navigation/navigation.module';
import { PostsModule } from 'src/layout/posts/posts.module';
import { LoginRoutingModule } from 'src/layout/login/login-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CartModule,
    CountiresModule,
    PostsModule,
    FeedModule,
    // ItemModule,
    LoginRoutingModule,
    NavigationModule,
    HttpClientModule,
    ReactiveFormsModule,
    // AuthGuard,
    // AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
