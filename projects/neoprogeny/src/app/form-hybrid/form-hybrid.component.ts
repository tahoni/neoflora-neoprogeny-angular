import {Component, OnInit} from '@angular/core';

import {LegendService} from "../legend.service";
import {IconService} from "../icon.service";
import {ActivatedRoute} from "@angular/router";
import {HybridService} from "../hybrid.service";

import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-crud',
  templateUrl: './form-hybrid.component.html',
  styleUrls: ['./form-hybrid.component.css']
})
export class FormHybridComponent implements OnInit {

  hybrid: any;
  hybridId: number;

  constructor(private activatedRoute: ActivatedRoute,
              public iconService: IconService, public legendService: LegendService,
              private hybridService: HybridService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.hybridId = params.id;
        this.hybrid = this.hybridService.getHybrid(this.hybridId);
      });
  }

  onSubmit(hybridForm) {
    let success: boolean = true;
    let valid: boolean = hybridForm.valid;
    let changed: boolean = hybridForm.dirty;

    if (!valid) {
      Swal.fire('Error', 'Not valid', 'error')
      success = false;
    }

    if ((changed) && (valid)) {
      const hybrid = {
        id: this.hybrid.id,
        code: hybridForm.value.code,
        parent: hybridForm.value.parent,
        description: hybridForm.value.description,
        seed: hybridForm.value.seed,
        offspring: hybridForm.value.offspring,
        image: this.hybrid.image,
        comment: hybridForm.value.comment
      }
      success = this.hybridService.setHybrid(hybrid);
    }

    return success;
  }

  onCancelClicked() {
  }

  onFileInputChanged(event) {
    const filesToUpload: FileList = event.target.files;
    if (filesToUpload && filesToUpload[0]) {
      let me = this;
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        me.hybrid.image = reader.result.toString();
        console.log(reader.result);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }

}

/*
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-photo-base64',
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
/*
function getBase64(event) {
   let me = this;
   let file = event.target.files[0];
   let reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     //me.modelvalue = reader.result;
     console.log(reader.result);
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
 */
