import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {HeaderComponent} from './content/header/header.component';
import {FooterComponent} from './content/footer/footer.component';

import {IconService} from "./icon.service";
import {LegendService} from "./legend.service";
import {ImageService} from "./image.service";


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
