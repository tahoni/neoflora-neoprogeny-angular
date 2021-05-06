import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {
  }

  alertSuccess(message: string) {
    // TODO: Promise returned from fire() is ignored
    Swal.fire('Success', message, 'success');
  }

  // TODO: Promise returned from fire() is ignored
  alertError(message: string) {
    Swal.fire('Error', message, 'error');
  }

}
