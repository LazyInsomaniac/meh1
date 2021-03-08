import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstCompRoutingModule } from './first-comp-routing.module';
import { FirstCompComponent } from './first-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FirstCompComponent],
  imports: [
    CommonModule,
    FirstCompRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class FirstCompModule { }
