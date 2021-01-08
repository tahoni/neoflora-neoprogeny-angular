import {Directive, HostListener} from '@angular/core';
import {NgForm} from "@angular/forms";
import Swal from 'sweetalert2';
import {FormService} from "./shared/form.service";

@Directive({
  selector: '[libSummaryOnError]'
})
export class SummaryOnErrorDirective {

  constructor(private form: NgForm, private formService: FormService) {
  }

  @HostListener('ngSubmit')
  onFormSubmit() {
    // Initialise the list of validation messages for all invalid controls
    let validationMessage = '';

    // Find all invalid controls
    const invalidControls = Object.keys(this.form.controls).filter(it => this.form.controls[it].invalid);
    // Build the list of of validation messages for all invalid controls
    for (const it of invalidControls) {
      // Find the validation message for the control
      const invalidMessage = this.formService.getValidationMessage(it);
      // Style the validation message for the control
      const invalidHtmlMessage = it + '<span style="color: red">' + invalidMessage + '</span><br>';
      validationMessage += invalidHtmlMessage;
    }

    // Display the list of validation messages for all invalid controls
    if (validationMessage) {
      validationMessage = 'Please fix the following errors:<br>' + validationMessage;
    }
    Swal.fire('Error', validationMessage, 'error');
  }

}
