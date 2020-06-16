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
  hybridPhoto: string = '';

  constructor(private activatedRoute: ActivatedRoute,
              private iconService: IconService, private legendService: LegendService,
              private hybridService: HybridService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.hybridId = params.id;
        this.hybrid = this.hybridService.getHybrid(this.hybridId);
        this.hybridPhoto = this.hybrid.image;
      });
  }

  save(hybridForm) {
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

  cancel() {
  }

  uploadProfilePhoto(event, form) {
    console.log(event.target);
    console.log(event.target.valueOf());
    console.log(event.target.name);
    console.log(form.controls[event.target.name]);
  }

}
