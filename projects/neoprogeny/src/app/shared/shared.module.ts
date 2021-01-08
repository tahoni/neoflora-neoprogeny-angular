import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {FocusOnErrorDirective, AlertService, TahoniLibModule} from "tahoni-lib";
import {FooterComponent, HeaderComponent, IconService, LegendService, NeofloraLibModule} from "neoflora-lib";

import {LookupComponent} from '../lookup/lookup.component';
import {SearchComponent} from '../search/search.component';
import {ImageComponent} from "../image/image/image.component";
import {ImageDetailComponent} from '../image/image-detail/image-detail.component';
import {ImageOverlayComponent} from "../image/image-overlay/image-overlay.component";

import {FileUploaderComponent} from '../file/file-uploader/file-uploader.component';
import {ImageUploaderComponent} from '../image/image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    LookupComponent,
    SearchComponent,
    ImageComponent,
    ImageDetailComponent,
    ImageOverlayComponent,
    ImageUploaderComponent,
    FileUploaderComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TahoniLibModule,
    NeofloraLibModule,
  ],
  exports: [
    FontAwesomeModule,
    FocusOnErrorDirective,
    HeaderComponent,
    FooterComponent,
    LookupComponent,
    SearchComponent,
    ImageComponent,
    ImageDetailComponent,
    ImageOverlayComponent,
    ImageUploaderComponent,
    FileUploaderComponent,
  ],
  providers: [
    AlertService,
    IconService,
    LegendService,
  ],
})
export class SharedModule {
}
