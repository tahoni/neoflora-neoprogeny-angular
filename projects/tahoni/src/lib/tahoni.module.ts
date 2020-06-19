import {NgModule} from '@angular/core';

import {FocusOnErrorDirective} from './focus-on-error.directive';
import {TouchOnErrorDirective} from './touch-on-error.directive';
import {SummaryOnErrorDirective} from './summary-on-error.directive';


@NgModule({
  declarations: [
    FocusOnErrorDirective,
    TouchOnErrorDirective,
    SummaryOnErrorDirective
  ],
  imports: [],
  exports: [
    FocusOnErrorDirective,
    TouchOnErrorDirective,
    SummaryOnErrorDirective
  ]
})
export class TahoniModule {
}
