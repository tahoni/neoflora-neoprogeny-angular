import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LegendService} from "../../legend.service";
import {IconService} from "../../icon.service";
import {HybridService} from "../hybrid.service";

import Swal from 'sweetalert2';

@Component({
  selector: 'app-hybrid-form',
  templateUrl: './hybrid-form.component.html',
  styleUrls: ['./hybrid-form.component.css']
})
export class HybridFormComponent implements OnInit {

  hybrid: any;
  hybridId: number;

  imageFileOptions = {
    allowedFileTypes: ['image/png', 'image/jpg', 'image/jpeg'],
    maxSize: 20971520,
    maxHeight: 25600,
    maxWidth: 25600,
  }

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

  onImageFileUploadedEvent(image) {
    this.hybrid.image = image;
  }

}
