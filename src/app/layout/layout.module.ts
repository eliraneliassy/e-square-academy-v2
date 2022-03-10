import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule} from "@angular/router";
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavBarComponent,
    SideBarComponent
  ],
  exports: [
    LayoutComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule {
}
