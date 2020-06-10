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
import {DetailViewComponent} from './detail-view/detail-view.component';
import {DetailCrudComponent} from './detail-crud/detail-crud.component';
import {SearchComponent} from './search/search.component';

import {SummaryComponent} from './summary/summary.component';
import {FormComponent} from './form/form.component';
import {ViewComponent} from './view/view.component';

import {IconService} from "./icon.service";
import {LegendService} from "./legend.service";
import {DataService} from "./data.service";

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
    DetailViewComponent,
    DetailCrudComponent,
    SearchComponent,
    SummaryComponent,
    FormComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    IconService,
    LegendService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
