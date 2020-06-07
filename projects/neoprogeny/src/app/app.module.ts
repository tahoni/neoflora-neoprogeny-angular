import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import {ContentComponent} from './content/content.component';
import {ListComponent} from './list/list.component';
import {SearchComponent} from './search/search.component';
import {DetailComponent} from './detail/detail.component';
import {AdvancedSearchComponent} from './advanced-search/advanced-search.component';
import {LookupComponent} from './lookup/lookup.component';
import {SimpleSearchComponent} from './simple-search/simple-search.component';
import {ViewComponent} from './view/view.component';
import {SummaryComponent} from './summary/summary.component';
import {NewComponent} from './new/new.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContentComponent,
    ListComponent,
    SearchComponent,
    DetailComponent,
    AdvancedSearchComponent,
    LookupComponent,
    SimpleSearchComponent,
    ViewComponent,
    SummaryComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
