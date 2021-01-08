import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {HeaderComponent} from './containers/header/header.component';
import {FooterComponent} from './containers/footer/footer.component';

import {IconService} from "./services/icon.service";
import {LegendService} from "./services/legend.service";
import {ImageService} from "./services/image.service";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    IconService,
    LegendService,
    ImageService,
  ]
})
export class NeofloraLibModule {
}
