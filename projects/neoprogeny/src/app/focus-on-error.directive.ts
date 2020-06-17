import {Directive, HostListener} from '@angular/core';
import {NgForm} from "@angular/forms";

@Directive({
  selector: '[appFocusOnError]'
})
export class FocusOnErrorDirective {

  constructor(private form: NgForm) {
  }

  @HostListener('ngSubmit')
  onFormSubmit() {
    // Find all invalid elements
    const invalidControls = Object.keys(this.form.controls).filter(it => this.form.controls[it].invalid);
    // Set focus to the first invalid element
    if (invalidControls.length > 0) {
      document.getElementById(invalidControls[0]).focus();
    }
  }

}
