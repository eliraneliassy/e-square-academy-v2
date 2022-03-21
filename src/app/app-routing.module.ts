import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FeedComponent} from "./feed/feed.component";
import {CartComponent} from "./cart/cart.component";
import {HomeComponent} from "./home/home.component";
import {PostsComponent} from "./posts/posts.component";
import {CountriesComponent} from "./countries/countries.component";
import {LoginComponent} from "../layout/login/login.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  // {path:'login', component: LoginComponent},
  // {path: 'feed', component:FeedComponent},
  {path: 'feed', loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)},
  {path: 'login', loadChildren: () => import('../layout/login/login.module').then(m => m.LoginModule)},
  {path: 'home', component:HomeComponent},
  {path: '404', component:HomeComponent},
  // {path: 'cart', component:CartComponent},
  {path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)},
  {path: 'posts', component: PostsComponent},
  {path: 'countries', component: CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
