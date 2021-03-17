import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {SharedModule} from "../../shared/shared.module";

import {HybridFormComponent} from "./hybrid-form/hybrid-form.component";

import {HybridNewComponent} from './hybrid-new/hybrid-new.component';
import {HybridSearchSimpleComponent} from './hybrid-search/hybrid-search-simple/hybrid-search-simple.component';
import {HybridSearchAdvancedComponent} from './hybrid-search/hybrid-search-advanced/hybrid-search-advanced.component';
import {HybridListComponent} from './hybrid-list/hybrid-list.component';
import {HybridListHeadComponent} from './hybrid-list/hybrid-list-head/hybrid-list-head.component';
import {HybridListRowComponent} from './hybrid-list/hybrid-list-row/hybrid-list-row.component';

import {HybridSummaryComponent} from "./hybrid-summary/hybrid-summary.component";
import {HybridSearchComponent} from "./hybrid-search/hybrid-search.component";
import {HybridEditComponent} from "./hybrid-edit/hybrid-edit.component";
import {HybridViewComponent} from "./hybrid-view/hybrid-view.component";

import {HybridService} from "./hybrid.service";

const routes: Routes = [
  {path: '', redirectTo: '/hybrid/summary', pathMatch: 'full'},
  {path: 'summary', component: HybridSummaryComponent},
  {path: 'search', component: HybridSearchComponent},
  {
    path: 'edit', component: HybridEditComponent, children: [
      {path: '', redirectTo: '0', pathMatch: 'full'},
      {path: ':id', component: HybridFormComponent},
    ]
  },
  {
    path: 'view', component: HybridViewComponent, children: [
      {path: '', redirectTo: '0', pathMatch: 'full'},
      {path: ':id', component: HybridFormComponent},
    ]
  },
  {path: '**', redirectTo: '/hybrid/summary'},
]

@NgModule({
  declarations: [
    HybridNewComponent,
    HybridSearchSimpleComponent,
    HybridSearchAdvancedComponent,
    HybridListComponent,
    HybridListHeadComponent,
    HybridListRowComponent,
    HybridFormComponent,
    HybridSearchComponent,
    HybridSummaryComponent,
    HybridViewComponent,
    HybridEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [
    HybridService,
  ]
})
export class HybridModule {
}
