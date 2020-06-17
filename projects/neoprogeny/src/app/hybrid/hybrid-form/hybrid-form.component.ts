import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
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
    let success = true;
    let valid = hybridForm.valid;
    let changed  = hybridForm.dirty;

    if (!valid) {
      success = false;
    }

    if ((changed) && (valid)) {
      const hybrid = {
        id: this.hybrid.id,
        code: hybridForm.value.code,
        parent: {
          mother: hybridForm.value.mother,
          father: hybridForm.value.father,
        },
        description: hybridForm.value.description,
        seed: hybridForm.value.seed,
        offspring: hybridForm.value.offspring,
        image: this.hybrid.image,
        comment: hybridForm.value.comment,
      }
      success = this.hybridService.setHybrid(hybrid);
    }

    if (success) {
      Swal.fire('Success', 'Successful', 'success');
      this.router.navigate([this.hybridService.getHybridRootPath()]);
    } else if (!valid) {
      Swal.fire('Error', 'Validation error', 'error')
    } else {
      Swal.fire('Error', 'Unexpected error', 'error');
    }

    return success;
  }

  onCancelClicked() {
    this.router.navigate([this.hybridService.getHybridRootPath()]);
  }

  onImageUploadedEvent(image) {
    this.hybrid.image = image;
  }

}
