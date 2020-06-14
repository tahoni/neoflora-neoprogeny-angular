import {Directive, ElementRef, HostListener} from '@angular/core';
import {NgForm} from "@angular/forms";

@Directive({
  selector: '[appMessageOnError]'
})
export class MessageOnErrorDirective {

  constructor(private el: ElementRef, private form: NgForm) {
  }

  @HostListener('ngSubmit')
  onFormSubmit() {
    // Find all invalid elements
    const invalidElements = this.el.nativeElement.querySelectorAll('.ng-invalid');
    // Display error message of all invalid elements
    for (let it of invalidElements) {
      const msg: string = '#' + it.name + 'Message';
      let el = this.el.nativeElement.querySelector(msg);
      if (el) {
        el.valueOf().textContent = it.validationMessage;
      }
    }
  }
}
