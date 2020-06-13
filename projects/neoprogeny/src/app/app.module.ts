import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import {ContentComponent} from './content/content.component';

import {NewComponent} from './new/new.component';
import {LookupComponent} from './lookup/lookup.component';
import {SearchSimpleComponent} from './search-simple/search-simple.component';
import {SearchAdvancedComponent} from './search-advanced/search-advanced.component';
import {ListComponent} from './list/list.component';
import {ListHeadComponent} from './list-head/list-head.component';
import {ListRowComponent} from './list-row/list-row.component';
import {ViewHybridComponent} from './view-hybrid/view-hybrid.component';
import {DetailHybridComponent} from './detail-hybrid/detail-hybrid.component';
import {SearchComponent} from './search/search.component';

import {SummaryComponent} from './summary/summary.component';
import {DetailComponent} from './detail/detail.component';
import {ViewComponent} from './view/view.component';

import {IconService} from "./icon.service";
import {LegendService} from "./legend.service";
import {HybridService} from "./hybrid.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContentComponent,
    NewComponent,
    LookupComponent,
    SearchSimpleComponent,
    SearchAdvancedComponent,
    ListComponent,
    ListHeadComponent,
    ListRowComponent,
    ViewHybridComponent,
    DetailHybridComponent,
    SearchComponent,
    SummaryComponent,
    ViewComponent,
    DetailComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule
    ],
  providers: [
    IconService,
    LegendService,
    HybridService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
