import {Directive, HostListener} from '@angular/core';
import {NgForm} from '@angular/forms';

@Directive({
  selector: '[libTouchOnError]'
})
export class TouchOnErrorDirective {

  constructor(private form: NgForm) {
  }

  @HostListener('ngSubmit')
  onFormSubmit() {
    // Find all invalid controls
    const invalidControls = Object.keys(this.form.controls).filter(it => this.form.controls[it].invalid);
    // Mark all invalid controls as touched
    for (const it of invalidControls) {
      this.form.controls[it].markAsTouched();
    }
  }

}
