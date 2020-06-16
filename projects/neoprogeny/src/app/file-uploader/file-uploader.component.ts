import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  @Output()
  public fileUploadedEvent = new EventEmitter();

  @Input()
  private fileUploadOptions;

  constructor() {
  }

  ngOnInit(): void {
  }

  onFileInputChanged(event) {
    const filesToUpload: FileList = event.target.files;
    if (filesToUpload && filesToUpload[0]) {
      const me = this;
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = function () {

        let success = true;
        let errorMessage = '';

        // Check the allowed file types, if any
        if ((success) && (me.fileUploadOptions) && (me.fileUploadOptions.allowedFileTypes)) {
          console.log(me.fileUploadOptions.allowedFileTypes);
        }

        // Check the maximum size, if any
        if ((success) && (me.fileUploadOptions) && (me.fileUploadOptions.maxSize)) {
          console.log(me.fileUploadOptions.maxSize);
        }

        // Check the maximum dimensions, if any
        if ((success) && (me.fileUploadOptions) &&
          (me.fileUploadOptions.maxHeight && me.fileUploadOptions.maxWidth)) {
          console.log(me.fileUploadOptions.maxHeight + 'x' + me.fileUploadOptions.maxWidth);
        }

        // Populate the error message, if any
        if (!success) {
          console.log(errorMessage);
        }

        // Return the uploaded file in base64
        if (success) {
          me.fileUploadedEvent.next(reader.result.toString());
        }
      };

      reader.onerror = function (error) {
        // Populate the error message, if any
        console.log('Error: ', error);
      };
    }
  }

}

/*
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-hybrid-photo-base64',
    templateUrl: './photo-base64.component.html',
    styleUrls: ['./photo-base64.component.css']
})
export class PhotoBase64Component implements OnInit {

    imageError: string;
    isImageSaved: boolean;
    cardImageBase64: string;

    constructor() { }

    ngOnInit() {
    }

    fileChangeEvent(fileInput: any) {
        this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 20971520;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 15200;
            const max_width = 25600;

            if (fileInput.target.files[0].size > max_size) {
                this.imageError =
                    'Maximum size allowed is ' + max_size / 1000 + 'Mb';

                return false;
            }

            if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
                this.imageError = 'Only Images are allowed ( JPG | PNG )';
                return false;
            }
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                    const img_height = rs.currentTarget['height'];
                    const img_width = rs.currentTarget['width'];

                    console.log(img_height, img_width);


                    if (img_height > max_height && img_width > max_width) {
                        this.imageError =
                            'Maximum dimentions allowed ' +
                            max_height +
                            '*' +
                            max_width +
                            'px';
                        return false;
                    } else {
                        const imgBase64Path = e.target.result;
                        this.cardImageBase64 = imgBase64Path;
                        this.isImageSaved = true;
                        // this.previewImagePath = imgBase64Path;
                    }
                };
            };

            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
 */
