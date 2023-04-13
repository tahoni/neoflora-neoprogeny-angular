import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {HybridService} from "../hybrid.service";
import {IconService} from "@tahoni/neoflora-lib";
import {LegendService} from "../../../utils/legend.service";
import {AlertService} from "@tahoni/tahoni-lib";
import {Hybrid} from "../../../types/hybrid.type";

@Component({
  selector: 'app-hybrid-form',
  templateUrl: './hybrid-form.component.html',
  styleUrls: ['./hybrid-form.component.scss', '../hybrid.scss']
})
export class HybridFormComponent implements OnInit {
  iconService: IconService;
  legendService: LegendService;
  alertService: AlertService;
  hybridId: number = 0;
  hybrid: Hybrid | null = null;
  private router: Router;
  private activatedRoute: ActivatedRoute;
  private hybridService: HybridService;

  constructor(router: Router, activatedRoute: ActivatedRoute, hybridService: HybridService,
              iconService: IconService, legendService: LegendService, alertService: AlertService) {
    this.iconService = iconService;
    this.legendService = legendService;
    this.alertService = alertService;

    this.router = router;
    this.activatedRoute = activatedRoute;
    this.hybridService = hybridService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.hybridId = Number(params['id']);
        const hybrid: Hybrid | null = this.hybridService.getHybridById(this.hybridId);
        this.hybrid = hybrid ? {...hybrid} as Hybrid : null;
      });
  }

  submit = (form: NgForm) => {
    if (!form.valid) {
      return false;
    }
    this.router.navigate([this.hybridService.getHybridSummaryPath()]).then();
    return true;
  }

  cancel = () => {
    this.router.navigate([this.hybridService.getHybridSummaryPath()]).then();
  }

}
