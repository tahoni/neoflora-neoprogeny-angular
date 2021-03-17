import {NgModule} from '@angular/core';

import {FocusOnErrorDirective} from './directives/focus-on-error.directive';
import {TouchOnErrorDirective} from './directives/touch-on-error.directive';
import {MessageOnErrorDirective} from './directives/message-on-error.directive';
import {SummaryOnErrorDirective} from './directives/summary-on-error.directive';

import {AlertService} from "./services/alert.service";

@NgModule({
  declarations: [
    FocusOnErrorDirective,
    TouchOnErrorDirective,
    MessageOnErrorDirective,
    SummaryOnErrorDirective,
  ],
  imports: [],
  exports: [
    FocusOnErrorDirective,
    TouchOnErrorDirective,
    MessageOnErrorDirective,
    SummaryOnErrorDirective,
  ],
  providers: [
    AlertService,
  ]
})
export class TahoniLibModule {
}
