import { NgModule } from '@angular/core';
import { TahoniComponent } from './tahoni.component';
import { TouchOnErrorDirective } from './touch-on-error.directive';
import { FocusOnErrorDirective } from './focus-on-error.directive';
import { SummaryOnErrorDirective } from './summary-on-error.directive';



@NgModule({
  declarations: [TahoniComponent, TouchOnErrorDirective, FocusOnErrorDirective, SummaryOnErrorDirective],
  imports: [
  ],
  exports: [TahoniComponent]
})
export class TahoniModule { }
