import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly _title = 'Neoprogeny';

  get title(): string {
    return this._title;
  }
}
