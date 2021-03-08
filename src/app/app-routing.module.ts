import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondCompComponent } from './first-comp/second-comp/second-comp.component';

const routes: Routes =[{ path: 'first', loadChildren: () => import('./first-comp/first-comp.module').then(m => m.FirstCompModule) }];
// Without First Component as Parent
// const routes: Routes = [{ path: 'second', component: SecondCompComponent, children: [{ path: 'second', loadChildren: () => import('../app/first-comp/second-comp/second-comp.module').then(m => m.SecondCompModule) }] }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
