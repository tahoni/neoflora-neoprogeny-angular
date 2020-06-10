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
import {SimpleSearchComponent} from './simple-search/simple-search.component';
import {AdvancedSearchComponent} from './advanced-search/advanced-search.component';
import {ListComponent} from './list/list.component';
import {DetailViewComponent} from './detail-view/detail-view.component';
import {DetailCrudComponent} from './detail-crud/detail-crud.component';
import {SearchComponent} from './search/search.component';
import {SummaryComponent} from './summary/summary.component';
import {FormComponent} from './form/form.component';
import {ViewComponent} from './view/view.component';

import {IconService} from "./icon.service";
import {LegendService} from "./legend.service";
import {DataService} from "./data.service";
import {RowComponent} from './row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContentComponent,
    NewComponent,
    LookupComponent,
    SimpleSearchComponent,
    AdvancedSearchComponent,
    ListComponent,
    DetailViewComponent,
    DetailCrudComponent,
    SearchComponent,
    SummaryComponent,
    FormComponent,
    ViewComponent,
    RowComponent
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
