import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HybridSummaryComponent} from "./hybrid-summary/hybrid-summary.component";
import {HybridFormComponent} from "./hybrid-form/hybrid-form.component";
import {HybridSearchComponent} from "./hybrid-search/hybrid-search.component";

const routes: Routes = [
  {path: '', redirectTo: '/hybrid/summary', pathMatch: 'full'},
  {path: 'summary', component: HybridSummaryComponent},
  {path: 'search', component: HybridSearchComponent},
  {
    path: 'edit', component: HybridFormComponent, children: [
      {path: '', redirectTo: '0', pathMatch: 'full'},
      {path: ':id', component: HybridFormComponent},
    ]
  },
  {
    path: 'view', component: HybridFormComponent, children: [
      {path: '', redirectTo: '0', pathMatch: 'full'},
      {path: ':id', component: HybridFormComponent},
    ]
  },
  {path: '**', redirectTo: '/hybrid/summary'},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HybridRoutingModule {
}
