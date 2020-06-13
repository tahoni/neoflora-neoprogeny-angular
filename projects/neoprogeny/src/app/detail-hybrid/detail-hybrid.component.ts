import {Component, OnInit} from '@angular/core';
import {LegendService} from "../legend.service";
import {IconService} from "../icon.service";
import {ActivatedRoute} from "@angular/router";
import {HybridService} from "../hybrid.service";

@Component({
  selector: 'app-detail-crud',
  templateUrl: './detail-hybrid.component.html',
  styleUrls: ['./detail-hybrid.component.css']
})
export class DetailHybridComponent implements OnInit {

  activatedRoute: ActivatedRoute;

  iconService: IconService;
  legendService: LegendService;
  hybridService: HybridService;

  hybridId: number;
  hybrid: any;

  constructor(activatedRoute: ActivatedRoute,
              iconService: IconService, legendService: LegendService, hybridService: HybridService) {
    this.activatedRoute = activatedRoute;
    this.iconService = iconService;
    this.legendService = legendService;
    this.hybridService = hybridService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.hybridId = params.id;
        this.hybrid = this.hybridService.getHybrid(this.hybridId);
      });
  }

  saveHybrid(event) {

  }

  cancelHybrid(event) {

  }
}
