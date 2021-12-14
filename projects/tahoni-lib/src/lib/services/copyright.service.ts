import {Injectable} from '@angular/core';
import {faCat, faMouse} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class CopyrightService {

  private copyrightLogo = [faCat, faMouse];
  private copyrightText = '2021 tahoni';

  getCopyrightIcons() {
    return this.copyrightLogo;
  }

  getCopyrightText() {
    return this.copyrightText;
  }

}
