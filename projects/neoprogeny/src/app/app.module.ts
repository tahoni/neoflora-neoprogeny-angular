import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {SharedModule} from "./shared/shared.module";

import {AppComponent} from './app.component';
import {BodyComponent} from './body/body.component';
import {ContentComponent} from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
