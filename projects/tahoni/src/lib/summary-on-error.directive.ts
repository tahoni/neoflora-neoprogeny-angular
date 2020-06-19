import {Directive} from '@angular/core';
import {NgForm} from "@angular/forms";

@Directive({
  selector: '[libSummaryOnError]'
})
export class SummaryOnErrorDirective {

  constructor(private ngForm: NgForm) {
  }

}
