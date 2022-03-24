import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LifeCyclesRoutingModule } from './life-cycles-routing.module';
import { LifeCyclesComponent } from './life-cycles.component';
import { LifeCyclesImplementationComponent } from './life-cycles-implmentation/life-cycles-implementation.component';



@NgModule({
  declarations: [
    LifeCyclesComponent,
    LifeCyclesImplementationComponent
  ],
  imports: [
    CommonModule,
    LifeCyclesRoutingModule,
    FormsModule
  ]
})
export class LifeCyclesModule { }
