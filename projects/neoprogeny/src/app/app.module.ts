import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {FocusOnErrorDirective} from './focus-on-error.directive';
import {TouchOnErrorDirective} from './touch-on-error.directive';

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
import {FormHybridComponent} from './form-hybrid/form-hybrid.component';
import {SearchComponent} from './search/search.component';

import {SummaryComponent} from './summary/summary.component';
import {HybridDetailComponent} from './hybrid-detail/hybrid-detail.component';
import {HybridViewComponent} from './hybrid-view/hybrid-view.component';

import {SharedService} from "./shared.service";
import {IconService} from "./icon.service";
import {LegendService} from "./legend.service";
import {HybridService} from "./hybrid.service";

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
    FormHybridComponent,
    SearchComponent,
    SummaryComponent,
    HybridViewComponent,
    HybridDetailComponent,
    FocusOnErrorDirective,
    TouchOnErrorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [
    SharedService,
    IconService,
    LegendService,
    HybridService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
