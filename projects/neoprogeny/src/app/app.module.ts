import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './form/body/body.component';
import { ContentComponent } from './form/content/content.component';
import {NeofloraLibModule} from "@tahoni/neoflora-lib";

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
export class AppModule { }
