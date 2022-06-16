import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuterComponent } from './outer-1.component';

const routes: Routes = [
    { path: '', component: OuterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OuterRouting { }
