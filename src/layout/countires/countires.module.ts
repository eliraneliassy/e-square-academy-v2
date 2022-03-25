import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from "ag-grid-angular";

import { CountiresRoutingModule } from './countires-routing.module';
import { CountiresComponent } from './countires.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountiresComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    CountiresRoutingModule
  ],
  exports:[
    CountiresComponent
  ]
})
export class CountiresModule { }
