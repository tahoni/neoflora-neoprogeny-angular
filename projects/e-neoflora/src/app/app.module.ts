import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NeofloraLibModule} from "@tahoni/neoflora-lib";
import {BodyComponent} from "./pages/body/body.component";
import {ContentComponent} from "./pages/content/content.component";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NeofloraLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
