import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {CopyrightComponent} from './components/copyright.component';

import {FocusOnErrorDirective} from './directives/focus-on-error.directive';
import {TouchOnErrorDirective} from './directives/touch-on-error.directive';
import {MessageOnErrorDirective} from './directives/message-on-error.directive';
import {SummaryOnErrorDirective} from './directives/summary-on-error.directive';

import {AlertService} from './services/alert.service';
import {CopyrightService} from './services/copyright.service';

@NgModule({
  declarations: [
    FocusOnErrorDirective,
    TouchOnErrorDirective,
    MessageOnErrorDirective,
    SummaryOnErrorDirective,
    CopyrightComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FocusOnErrorDirective,
    TouchOnErrorDirective,
    MessageOnErrorDirective,
    SummaryOnErrorDirective,
    CopyrightComponent,
  ],
  providers: [
    AlertService,
    CopyrightService,
  ]
})
export class TahoniLibModule {
}
