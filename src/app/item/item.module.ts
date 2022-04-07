import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from '../shared/highlight/highlight.module';
import {ItemComponent} from "./item.component";
import {AcademyButtonModule} from "academy-style";



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
    AcademyButtonModule
  ],
})
export class ItemModule { }
