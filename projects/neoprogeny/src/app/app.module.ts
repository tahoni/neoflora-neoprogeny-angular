import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import {ContentComponent} from './content/content.component';
import {ListComponent} from './list/list.component';
import {SearchComponent} from './search/search.component';
import {NewComponent} from './new/new.component';
import {AdvancedSearchComponent} from './advanced-search/advanced-search.component';
import {LookupComponent} from './lookup/lookup.component';
import {SimpleSearchComponent} from './simple-search/simple-search.component';
import {ViewComponent} from './view/view.component';
import {SummaryComponent} from './summary/summary.component';
import {DetailViewComponent} from './detail-view/detail-view.component';
import {DetailCrudComponent} from './detail-crud/detail-crud.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContentComponent,
    ListComponent,
    SearchComponent,
    AdvancedSearchComponent,
    LookupComponent,
    SimpleSearchComponent,
    NewComponent,
    ViewComponent,
    SummaryComponent,
    DetailCrudComponent,
    DetailViewComponent,
    FormComponent
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
