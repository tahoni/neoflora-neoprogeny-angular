import {Injectable} from '@angular/core';
import {sanitizeHtml} from 'sanitize-html';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() {
  }

  getValidationMessage(control: string): string {
    // Find the invalid control
    let invalidMessage = '';
    const invalidControl = $('#' + this.cleanHtml(control));

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

  cleanHtml(source: string): string {
    return sanitizeHtml(source, {
      allowedTags: [],
      allowedAttributes: {},
      disallowedTagsMode: 'discard',
    });
  }

}
