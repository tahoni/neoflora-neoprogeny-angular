import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {NeofloraLibModule} from "@tahoni/neoflora-lib";
import {TahoniLibModule} from "@tahoni/tahoni-lib";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BodyComponent} from './core/pages/body/body.component';
import {ContentComponent} from './core/pages/content/content.component';
import {HybridModule} from "./features/hybrid/hybrid.module";
import {ImageComponent} from './features/image/image.component';
import {SearchComponent} from './features/search/search.component';

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
    HttpClientModule,
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
