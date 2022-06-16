import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child-1.component';

const routes: Routes = [
    { 
        path: '',
        component: Child1Component,
        children: [
            {
                path: 'outer-1',
                outlet: 'outer-1',
                loadChildren: () => import('../../../outer-module-1/outer-module-1').then(m => m.OuterModule1)
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Child1Routing { }
