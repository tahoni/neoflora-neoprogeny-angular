import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ViewHybridComponent} from "../view-hybrid/view-hybrid.component";
import {HybridDetailComponent} from "../hybrid-detail/hybrid-detail.component";

const routes: Routes = [
  {
    path: '', component: HybridDetailComponent, children: [
      {path: '', redirectTo: '0', pathMatch: 'full'},
      {path: ':id', component: ViewHybridComponent},
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewModule {
}
