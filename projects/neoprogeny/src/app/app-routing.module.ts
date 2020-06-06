import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from "./detail/detail.component";
import {SearchComponent} from "./search/search.component";
import {AdvancedSearchComponent} from "./advanced-search/advanced-search.component";
import {ListComponent} from "./list/list.component";


const routes: Routes = [
  {path: "", component: ListComponent},
  {path: "list", component: ListComponent},
  {path: "detail", component: DetailComponent},
  {path: "search", component: SearchComponent},
  {path: "advanced_search", component: AdvancedSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
