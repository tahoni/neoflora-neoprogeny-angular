import {NgModule} from '@angular/core';

import {FocusOnErrorDirective} from './directives/focus-on-error.directive';
import {TouchOnErrorDirective} from './directives/touch-on-error.directive';
import {MessageOnErrorDirective} from './directives/message-on-error.directive';
import {SummaryOnErrorDirective} from './directives/summary-on-error.directive';

import {AlertService} from './services/alert.service';
import {CopyrightService} from './services/copyright.service';
import {CopyrightComponent} from './components/copyright/copyright/copyright.component';

@NgModule({
  declarations: [
    FocusOnErrorDirective,
    TouchOnErrorDirective,
    MessageOnErrorDirective,
    SummaryOnErrorDirective,
    CopyrightComponent,
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
    CopyrightService,
  ]
})
export class TahoniLibModule {
}
