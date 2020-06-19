import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {FocusOnErrorDirective, AlertService, TahoniLibModule} from 'tahoni-lib';
import {IconService, LegendService, NeofloraLibModule} from "neoflora-lib";

import {LookupComponent} from '../lookup/lookup.component';
import {SearchComponent} from '../search/search.component';
import {ImageComponent} from "../image/image/image.component";
import {ImageDetailComponent} from '../image/image-detail/image-detail.component';
import {FileUploaderComponent} from '../file/file-uploader/file-uploader.component';
import {ImageUploaderComponent} from '../image/image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    LookupComponent,
    SearchComponent,
    ImageComponent,
    ImageDetailComponent,
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
    LookupComponent,
    SearchComponent,
    ImageComponent,
    ImageDetailComponent,
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
