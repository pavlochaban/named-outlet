import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [
    { path: '', redirectTo: 'main-module', pathMatch: 'full' },
    { 
        path: 'main-module',
        component: MainModuleComponent,
        children: [
            {
                path: 'child-1',
                loadChildren: () => import('./child-module-1/child-1.module').then(m => m.MainModule)
            },
            {
                path: 'child-2',
                loadChildren: () => import('./child-module-2/child-2.module').then(m => m.MainModule)
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRouting { }
