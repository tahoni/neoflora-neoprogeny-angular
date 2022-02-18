import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HybridSummaryComponent} from "./hybrid-summary/hybrid-summary.component";
import {HybridFormComponent} from "./hybrid-form/hybrid-form.component";
import {HybridService} from "./hybrid.service";
import { HybridListComponent } from './hybrid-list/hybrid-list.component';
import { HybridListHeadComponent } from './hybrid-list/hybrid-list-head/hybrid-list-head.component';
import { HybridListRowComponent } from './hybrid-list/hybrid-list-row/hybrid-list-row.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    HybridSummaryComponent,
    HybridFormComponent,
    HybridListComponent,
    HybridListHeadComponent,
    HybridListRowComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [
    HybridService,
  ],
  exports: [
    HybridSummaryComponent,
    HybridFormComponent,
  ]
})
export class HybridModule {
}
