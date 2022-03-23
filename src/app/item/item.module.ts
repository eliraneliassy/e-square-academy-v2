import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from '../shared/highlight/highlight.module';
import {ItemComponent} from "./item.component";



@NgModule({
  declarations: [
    ItemComponent
  ],
  exports: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    FormsModule,
  ],
})
export class ItemModule { }
