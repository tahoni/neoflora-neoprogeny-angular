import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {TahoniModule} from 'tahoni';

import {LookupComponent} from '../lookup/lookup.component';
import {SearchComponent} from '../search/search.component';
import {ImageComponent} from "../image/image/image.component";
import {ImageDetailComponent} from '../image/image-detail/image-detail.component';
import {FileUploaderComponent} from '../file/file-uploader/file-uploader.component';
import {ImageUploaderComponent} from '../image/image-uploader/image-uploader.component';

import {IconService} from "./icon.service";
import {LegendService} from "./legend.service";

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
    TahoniModule,
  ],
  exports: [
    FontAwesomeModule,
    TahoniModule,
    LookupComponent,
    SearchComponent,
    ImageComponent,
    ImageDetailComponent,
    ImageUploaderComponent,
    FileUploaderComponent,
  ],
  providers: [
    IconService,
    LegendService,
  ],
})
export class SharedModule {
}
