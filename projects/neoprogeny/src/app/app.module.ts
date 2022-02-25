import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BodyComponent} from './form/body/body.component';
import {ContentComponent} from './form/content/content.component';
import {NeofloraLibModule} from "@tahoni/neoflora-lib";
import {HybridModule} from "./hybrid/hybrid.module";
import {TahoniLibModule} from "@tahoni/tahoni-lib";
import { ImageComponent } from './image/image.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ContentComponent,
    ImageComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TahoniLibModule,
    NeofloraLibModule,
    HybridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
