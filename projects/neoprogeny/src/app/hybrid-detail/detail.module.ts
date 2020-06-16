import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormHybridComponent} from "../form-hybrid/form-hybrid.component";
import {HybridDetailComponent} from "./hybrid-detail.component";

const routes: Routes = [
  {
    path: '', component: HybridDetailComponent, children: [
      {path: '', redirectTo: '0', pathMatch: 'full'},
      {path: ':id', component: FormHybridComponent},
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
