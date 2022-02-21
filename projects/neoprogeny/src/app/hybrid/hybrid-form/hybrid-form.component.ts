import {Component, OnInit} from '@angular/core';
import {Hybrid} from "../hybrid.type";
import {ActivatedRoute, Router} from "@angular/router";
import {HybridService} from "../hybrid.service";
import {IconService} from "@tahoni/neoflora-lib";
import {LegendService} from "../../utils/legend.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hybrid-form',
  templateUrl: './hybrid-form.component.html',
  styleUrls: ['./hybrid-form.component.scss', '../hybrid.scss']
})
export class HybridFormComponent implements OnInit {
  iconService: IconService;
  legendService: LegendService;
  private router: Router;
  private activatedRoute: ActivatedRoute;
  private hybridService: HybridService;

  hybridId: number = 0;
  hybrid: Hybrid | null = null;

  constructor(router: Router, activatedRoute: ActivatedRoute, hybridService: HybridService,
              iconService: IconService, legendService: LegendService) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.hybridService = hybridService;
    this.iconService = iconService;
    this.legendService = legendService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.hybridId = Number(params['id']);
        const hybrid: Hybrid | null = this.hybridService.getHybridById(this.hybridId);
        this.hybrid = hybrid ? {...hybrid} as Hybrid : null;
      });
  }

  submit = (form: NgForm) => true;
  cancel = () => {
    this.router.navigate([this.hybridService.getHybridSummaryPath()]).then();
  }

}
