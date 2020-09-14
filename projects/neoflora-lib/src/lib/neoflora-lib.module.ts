import {NgModule} from '@angular/core';

import {IconService} from "./icon.service";
import {LegendService} from "./legend.service";
import {ImageService} from "./image.service";
import { HeaderComponent } from './content/header/header.component';
import { FooterComponent } from './content/footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [],
  exports: [],
  providers: [
    IconService,
    LegendService,
    ImageService,
  ]
})
export class NeofloraLibModule {
}
