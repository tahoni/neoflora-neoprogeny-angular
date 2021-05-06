import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  @Input()
  fileUploadOptions;

  @Output()
  public fileUploadedEvent = new EventEmitter();

  public fileUploadFeedback = '';

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

      // TODO: non-arrow functions are forbidden
      reader.onload = function () {
        let success = true;
        let errorMessage = '';

        // Check the allowed file types, if any
        if ((success) && (me.fileUploadOptions) && (me.fileUploadOptions.allowedFileTypes)) {
          success = me.verifyFileType(file, me.fileUploadOptions.allowedFileTypes);
          if (!success) {
            errorMessage = 'Wrong type';
          }
        }

        // Check the maximum size, if any
        if ((success) && (me.fileUploadOptions) && (me.fileUploadOptions.maxSize)) {
          success = me.verifyFileSize(file, me.fileUploadOptions.maxSize)
          if (!success) {
            errorMessage = 'Too large';
          }
        }

        // Check the maximum dimensions, if any
        if ((success) && (me.fileUploadOptions) &&
          (me.fileUploadOptions.maxHeight && me.fileUploadOptions.maxWidth)) {

          me.verifyImageSize(reader.result.toString(),
            me.fileUploadOptions.maxHeight, me.fileUploadOptions.maxWidth).then((result) => {

            errorMessage = result ? '' : 'Too big';
            return me.onFileInputVerified(reader.result.toString(), errorMessage);
          });
        }

        return me.onFileInputVerified(reader.result.toString(), errorMessage);
      }

      // TODO: Unused parameter error
      reader.onerror = function (error) {
        // Populate the error message
        const message = 'Error';
        me.onFileInputVerified('', message);
      };
    }
  }

  verifyFileType(file: File, allowedFileTypes: string[]): boolean {
    let result = true;

    if (!_.includes(allowedFileTypes, file.type)) {
      result = false;
    }

    return result;
  }

  verifyFileSize(file: File, maxSize: number): boolean {
    let result = true;

    if (file.size > maxSize) {
      result = false;
    }

    return result;
  }

  verifyImageSize(src: string, maxHeight: number, maxWidth: number): Promise<boolean> {
    const image = new Image();
    image.src = src;
    return new Promise((resolve) => {
      image.onload = ((rs) => {
        // TODO: object access via string literals is disallowed
        const imageHeight = rs.currentTarget['height'];
        const imageWidth = rs.currentTarget['width'];

        if (imageHeight > maxHeight && imageWidth > maxWidth) {
          resolve(false);
        } else {
          resolve(true);
        }
      })
    });
  }

  onFileInputVerified(result: string, error: string): boolean {
    if (error) {
      // Populate the error message, if any
      this.fileUploadFeedback = 'Invalid';
      return false;
    } else {
      // Return the uploaded file in base641
      this.fileUploadFeedback = '';
      this.fileUploadedEvent.next(result);
      return true;
    }
  };

}
