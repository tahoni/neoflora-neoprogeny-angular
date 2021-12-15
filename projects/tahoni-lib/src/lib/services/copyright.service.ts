import {Injectable} from '@angular/core';
import {faCat, faCopyright, faMouse} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class CopyrightService {

  private copyrightSymbol =  faCopyright;
  private copyrightLogo = [faCat, faMouse];
  private copyrightText = '2021 tahoni';

  getCopyrightSymbol() {
    return this.copyrightSymbol;
  }

  getCopyrightIcons() {
    return this.copyrightLogo;
  }

  getCopyrightText() {
    return this.copyrightText;
  }

}
