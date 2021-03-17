import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  @Input()
  imageSrc = '';
  @Input()
  imageAlt = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
