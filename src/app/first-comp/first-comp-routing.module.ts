import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstCompComponent } from './first-comp.component';

//Setting the Child Route.
const routes: Routes = [{ path: '', component: FirstCompComponent, children: [{ path: 'second', loadChildren: () => import('./second-comp/second-comp.module').then(m => m.SecondCompModule) }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstCompRoutingModule { }
