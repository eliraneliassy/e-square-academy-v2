import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LifeCyclesComponent } from './life-cycles.component';

@NgModule({
  imports: [RouterModule.forChild([{
    path: '',
   component: LifeCyclesComponent }])]
})
export class LifeCyclesRoutingModule {}
