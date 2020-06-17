import {Component, Input, OnInit} from '@angular/core';
import {IconService} from "../icon.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input()
  imageSrc = '';
  @Input()
  imageAlt = '';
  @Input()
  imageIconClass = '';
  @Input()
  imageClass ='';

  imageIconStandardClasses = ['image-icon'];
  imageStandardClasses = ['image'];

  imageIconClasses = this.imageIconStandardClasses;
  imageClasses = this.imageStandardClasses;

  constructor(public iconService: IconService) {
  }

  ngOnInit(): void {
    if (this.imageIconClass) {
      this.imageIconClasses.push(this.imageIconClass);
    }
    if (this.imageClass) {
      this.imageClasses.push(this.imageClass);
    }
  }

}
