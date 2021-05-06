import {Directive, HostListener} from '@angular/core';
import {NgForm} from '@angular/forms';

declare var $: any;

@Directive({
  selector: '[libFocusOnError]'
})
export class FocusOnErrorDirective {

  constructor(private form: NgForm) {
  }

  @HostListener('ngSubmit')
  onFormSubmit() {
    // Find all invalid controls
    const invalidControls = Object.keys(this.form.controls).filter(it => this.form.controls[it].invalid);
    // Set focus to the first invalid control
    if (invalidControls.length > 0) {
      $('#' + invalidControls[0]).focus();
    }
  }

}
