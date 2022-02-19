import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'neoprogeny';

  private readonly _heading = 'Neoprogeny';

  get heading(): string {
    return this._heading;
  }
}
