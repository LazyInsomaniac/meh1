import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondCompRoutingModule } from './second-comp-routing.module';
import { SecondCompComponent } from './second-comp.component';


@NgModule({
  declarations: [SecondCompComponent],
  imports: [
    CommonModule,
    SecondCompRoutingModule
  ]
})
export class SecondCompModule { }
