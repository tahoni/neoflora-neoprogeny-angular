import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {HeaderComponent} from './containers/header/header.component';
import {FooterComponent} from './containers/footer/footer.component';

import {IconService} from './services/icon.service';
import {LegendService} from './services/legend.service';
import {ImageService} from './services/image.service';

import {TahoniLibModule, CopyrightComponent} from 'tahoni-lib';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CopyrightComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    IconService,
    LegendService,
    ImageService,
    TahoniLibModule,
  ]
})
export class NeofloraLibModule {
}
