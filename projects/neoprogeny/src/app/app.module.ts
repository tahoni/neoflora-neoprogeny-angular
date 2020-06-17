import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {FocusOnErrorDirective} from './focus-on-error.directive';
import {TouchOnErrorDirective} from './touch-on-error.directive';

import {AppComponent} from './app.component';
import {HeaderComponent} from './content/header/header.component';
import {FooterComponent} from './content/footer/footer.component';
import {BodyComponent} from './body/body.component';
import {ContentComponent} from './content/content.component';

import {LookupComponent} from './lookup/lookup.component';
import {SearchComponent} from './search/search.component';
import {ImageComponent} from "./image/image/image.component";
import {ImageDetailComponent} from './image/image-detail/image-detail.component';
import {FileUploaderComponent} from './file-uploader/file-uploader.component';
import {ImageUploaderComponent} from './image/image-uploader/image-uploader.component';

import {HybridNewComponent} from './hybrid/hybrid-new/hybrid-new.component';
import {HybridSearchSimpleComponent} from './hybrid/hybrid-search/hybrid-search-simple/hybrid-search-simple.component';
import {HybridSearchAdvancedComponent} from './hybrid/hybrid-search/hybrid-search-advanced/hybrid-search-advanced.component';
import {HybridListComponent} from './hybrid/hybrid-list/hybrid-list.component';
import {HybridListHeadComponent} from './hybrid/hybrid-list/hybrid-list-head/hybrid-list-head.component';
import {HybridListRowComponent} from './hybrid/hybrid-list/hybrid-list-row/hybrid-list-row.component';
import {HybridFormComponent} from './hybrid/hybrid-form/hybrid-form.component';
import {HybridSearchComponent} from './hybrid/hybrid-search/hybrid-search.component';

import {HybridSummaryComponent} from './hybrid/hybrid-summary/hybrid-summary.component';
import {HybridEditComponent} from './hybrid/hybrid-edit/hybrid-edit.component';
import {HybridViewComponent} from './hybrid/hybrid-view/hybrid-view.component';

import {IconService} from "./icon.service";
import {LegendService} from "./legend.service";
import {HybridService} from "./hybrid/hybrid.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContentComponent,
    LookupComponent,
    SearchComponent,
    ImageComponent,
    ImageDetailComponent,
    FileUploaderComponent,
    ImageUploaderComponent,
    HybridNewComponent,
    HybridSearchSimpleComponent,
    HybridSearchAdvancedComponent,
    HybridListComponent,
    HybridListHeadComponent,
    HybridListRowComponent,
    HybridFormComponent,
    HybridSearchComponent,
    HybridSummaryComponent,
    HybridViewComponent,
    HybridEditComponent,
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
    IconService,
    LegendService,
    HybridService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
