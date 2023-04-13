import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./features/hybrid/hybrid-routing.module').then(m => m.HybridRoutingModule), pathMatch: 'full'},
  {path: 'hybrid', loadChildren: () => import('./features/hybrid/hybrid-routing.module').then(m => m.HybridRoutingModule)},
  {path: '**', loadChildren: () => import('./features/hybrid/hybrid-routing.module').then(m => m.HybridRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
