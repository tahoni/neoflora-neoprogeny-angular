import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFocusOnError]'
})
export class FocusOnErrorDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('ngSubmit')
  onFormSubmit() {
    // Find all invalid elements
    const invalidElements = this.el.nativeElement.querySelectorAll('.ng-invalid');
    // Set focus to the first invalid element
    if (invalidElements.length > 0) {
      invalidElements[0].focus();
    }
  }
}
