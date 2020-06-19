import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() {
  }

  getValidationMessage(control: string) {
    // Find the invalid control
    let invalidMessage = '';
    const invalidControl = document.getElementById(control);

    // Get the validation message of the invalid control, if any
    if (invalidControl instanceof HTMLButtonElement) {
      invalidMessage = (invalidControl as HTMLButtonElement).validationMessage;
    } else if (invalidControl instanceof HTMLFieldSetElement) {
      invalidMessage = (invalidControl as HTMLFieldSetElement).validationMessage;
    } else if (invalidControl instanceof HTMLInputElement) {
      invalidMessage = (invalidControl as HTMLInputElement).validationMessage;
    } else if (invalidControl instanceof HTMLOutputElement) {
      invalidMessage = (invalidControl as HTMLOutputElement).validationMessage;
    } else if (invalidControl instanceof HTMLSelectElement) {
      invalidMessage = (invalidControl as HTMLSelectElement).validationMessage;
    } else if (invalidControl instanceof HTMLTextAreaElement) {
      invalidMessage = (invalidControl as HTMLTextAreaElement).validationMessage;
    }

    // Return the validation message of the invalid control
    return invalidMessage;
  }

}
