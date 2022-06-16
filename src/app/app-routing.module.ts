import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/main-module/main-module').then(m => m.MainModule) },
  {
    path: 'outer-2-named',
    outlet: 'outer-2',
    loadChildren: () => import('./outer-module-2/outer-module-2').then(m => m.OuterModule2)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
