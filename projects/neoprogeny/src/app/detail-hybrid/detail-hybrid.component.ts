import {Component, OnInit} from '@angular/core';
import {LegendService} from "../legend.service";
import {IconService} from "../icon.service";
import {ActivatedRoute} from "@angular/router";
import {HybridService} from "../hybrid.service";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-detail-crud',
  templateUrl: './detail-hybrid.component.html',
  styleUrls: ['./detail-hybrid.component.css']
})
export class DetailHybridComponent implements OnInit {

  activatedRoute: ActivatedRoute;

  sharedService: SharedService;
  iconService: IconService;
  legendService: LegendService;
  hybridService: HybridService;

  hybrid: any;

  constructor(activatedRoute: ActivatedRoute, sharedService: SharedService,
              iconService: IconService, legendService: LegendService, hybridService: HybridService) {
    this.activatedRoute = activatedRoute;
    this.sharedService = sharedService;
    this.iconService = iconService;
    this.legendService = legendService;
    this.hybridService = hybridService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.hybrid = this.hybridService.getHybrid(params.id);
      });
  }

  saveHybrid(event) {
    let result: boolean = this.hybridService.putHybrid(this.hybrid)
    if (result) {
      this.sharedService.redirect('/');
    }
  }

  cancelHybrid(event) {
    this.sharedService.redirect('/');
  }
}
