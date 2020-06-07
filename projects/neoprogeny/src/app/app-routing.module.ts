import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {ViewComponent} from "./view/view.component";
import {EditComponent} from "./edit/edit.component";
import {SummaryComponent} from "./summary/summary.component";


const routes: Routes = [
  {path: "", component: SummaryComponent},
  {path: "list", loadChildren: () => import('./summary/summary.module').then(m => m.SummaryModule)},
  {path: "view", loadChildren: () => import('./view/view.module').then(m => m.ViewModule)},
  {path: "edit", loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)},
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
