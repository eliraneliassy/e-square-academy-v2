import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from 'src/layout/auth/auth.guard';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  // {path: 'feed', component:FeedComponent}, 
  {
    path: 'home', 
    component:HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '404', 
    component:HomeComponent
  },
  // {path: 'cart', component:CartComponent},
  // {path: 'posts', component: PostsComponent},
  // {path: 'countries', component: CountriesComponent}
  {
    path: 'feed', loadChildren: () => import('../layout/feed/feed-routing.module').then(m => m.FeedRoutingModule)
  },
  {
    path: 'login', loadChildren: () => import('../layout/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'item', loadChildren: () => import('../layout/item/item-routing.module').then(m => m.ItemRoutingModule)
  },
  {
    path: 'cart', loadChildren: () => import('../layout/cart/cart-routing.module').then(m => m.CartRoutingModule)
  },
  {
    path: 'posts', loadChildren: () => import('../layout/posts/posts-routing.module').then(m => m.PostsRoutingModule)
  },
  {
    path: 'countries', loadChildren: () => import('../layout/countires/countires-routing.module').then(m => m.CountiresRoutingModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
