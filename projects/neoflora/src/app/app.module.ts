import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {NeofloraLibModule} from "neoflora-lib";

import {AppComponent} from './app.component';
import {BodyComponent} from './containers/body/body.component';
import {ContentComponent} from './containers/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ContentComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NeofloraLibModule,
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
