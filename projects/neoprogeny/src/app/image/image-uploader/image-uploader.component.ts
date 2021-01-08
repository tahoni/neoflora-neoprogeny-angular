import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IconService} from "neoflora-lib";
import {ImageService} from "neoflora-lib";

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css', '../image.css']
})
export class ImageUploaderComponent implements OnInit {

  @Input()
  imageSrc = '';
  @Input()
  imageAlt = '';
  @Input()
  imageIconClass = '';
  @Input()
  imageClass = '';

  @Output()
  public imageUploadedEvent = new EventEmitter();

  constructor(public iconService: IconService, public imageService: ImageService) {
  }

  ngOnInit(): void {
  }

  onFileUploadedEvent(event) {
    this.imageUploadedEvent.next(event);
  }

}
