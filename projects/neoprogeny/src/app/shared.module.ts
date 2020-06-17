import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {FocusOnErrorDirective} from './focus-on-error.directive';
import {TouchOnErrorDirective} from './touch-on-error.directive';

import {LookupComponent} from './lookup/lookup.component';
import {SearchComponent} from './search/search.component';
import {ImageComponent} from "./image/image/image.component";
import {ImageDetailComponent} from './image/image-detail/image-detail.component';
import {FileUploaderComponent} from './file/file-uploader/file-uploader.component';
import {ImageUploaderComponent} from './image/image-uploader/image-uploader.component';

import {IconService} from "./icon.service";
import {LegendService} from "./legend.service";

@NgModule({
  declarations: [
    FocusOnErrorDirective,
    TouchOnErrorDirective,
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
  ],
  exports: [
    FontAwesomeModule,
    FocusOnErrorDirective,
    TouchOnErrorDirective,
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
