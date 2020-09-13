import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {LegendService} from "../../shared/legend.service";
import {IconService} from "../../shared/icon.service";
import {AlertService} from "../../shared/alert.service";

import {HybridService} from "../hybrid.service";

@Component({
  selector: 'app-hybrid-form',
  templateUrl: './hybrid-form.component.html',
  styleUrls: ['./hybrid-form.component.css', '../hybrid.css', '../../image/image.css']
})
export class HybridFormComponent implements OnInit {

  hybrid: any;
  hybridId: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              public iconService: IconService, public legendService: LegendService,
              private alertService: AlertService, private hybridService: HybridService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.hybridId = params.id;
        this.hybrid = this.hybridService.getHybrid(this.hybridId);
      });
  }

  onSubmit(hybridForm) {
    const valid = hybridForm.valid;
    let success: boolean;

    if (valid) {
      const hybrid = {
        id: this.hybridId,
        code: hybridForm.value.code,
        mother: hybridForm.value.mother,
        father: hybridForm.value.father,
        description: hybridForm.value.description,
        seed: hybridForm.value.seed,
        offspring: hybridForm.value.offspring,
        image: this.hybrid.image,
        comment: hybridForm.value.comment,
      }
      success = this.hybridService.setHybrid(hybrid);
    }

    if (valid) {
      if (success) {
        this.alertService.alertSuccess('Successful');
        this.router.navigate([this.hybridService.getHybridsSummaryPath()]);

      } else {
        this.alertService.alertError('Unexpected error');
      }

    } else {
      this.alertService.alertError('Validation error');
    }

    return success;
  }

  onCancelClicked() {
    this.router.navigate([this.hybridService.getHybridsSummaryPath()]);
  }

  onImageUploadedEvent(image) {
    this.hybrid.image = image;
  }

}
