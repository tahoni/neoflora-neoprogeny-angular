import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SummaryComponent} from "./summary/summary.component";


const routes: Routes = [
  {path: "", component: SummaryComponent},
  {path: "summary", loadChildren: () => import('./summary/summary.module').then(m => m.SummaryModule)},
  {path: "view", loadChildren: () => import('./view/view.module').then(m => m.ViewModule)},
  {path: "detail", loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)},
  {path: "search", loadChildren: () => import('./search/search.module').then(m => m.SearchModule)}
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
