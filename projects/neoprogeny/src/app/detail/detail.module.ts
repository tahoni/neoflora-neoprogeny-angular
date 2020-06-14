import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DetailHybridComponent} from "../detail-hybrid/detail-hybrid.component";
import {DetailComponent} from "./detail.component";

const routes: Routes = [
  {
    path: '', component: DetailComponent, children: [
      {path: '', redirectTo: '0', pathMatch: 'full'},
      {path: ':id', component: DetailHybridComponent},
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
export class DetailModule {
}
