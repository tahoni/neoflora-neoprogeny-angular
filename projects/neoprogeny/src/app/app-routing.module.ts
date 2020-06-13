import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/summary', pathMatch: 'full'},
  {path: 'summary', loadChildren: () => import('./summary/summary.module').then(m => m.SummaryModule)},
  {path: 'view', loadChildren: () => import('./view/view.module').then(m => m.ViewModule)},
  {path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)},
  {path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)},
  {path: '**', redirectTo: '/summary'}
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
