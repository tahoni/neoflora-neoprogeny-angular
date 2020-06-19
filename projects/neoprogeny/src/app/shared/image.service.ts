import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imageFileOptions = {
    allowedFileTypes: ['image/png', 'image/jpg', 'image/jpeg'],
    maxSize: 20971520,
    maxHeight: 25600,
    maxWidth: 25600,
  }

  constructor() {
  }

  getImageFileOptions() {
    return this.imageFileOptions;
  }

}
