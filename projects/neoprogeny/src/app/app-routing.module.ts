import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./components/hybrid/hybrid.module').then(m => m.HybridModule), pathMatch: 'full'},
  {path: 'hybrid', loadChildren: () => import('./components/hybrid/hybrid.module').then(m => m.HybridModule)},
  {path: '**', loadChildren: () => import('./components/hybrid/hybrid.module').then(m => m.HybridModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
