import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {FocusOnErrorDirective, AlertService, TahoniLibModule} from 'tahoni-lib';
import {FooterComponent, HeaderComponent, IconService, LegendService, NeofloraLibModule} from 'neoflora-lib';

import {LookupComponent} from '../components/lookup/lookup.component';
import {SearchComponent} from '../components/search/search.component';
import {ImageComponent} from '../components/image/image/image.component';
import {ImageDetailComponent} from '../components/image/image-detail/image-detail.component';
import {ImageOverlayComponent} from '../components/image/image-overlay/image-overlay.component';

import {FileUploaderComponent} from '../components/file/file-uploader/file-uploader.component';
import {ImageUploaderComponent} from '../components/image/image-uploader/image-uploader.component';

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
