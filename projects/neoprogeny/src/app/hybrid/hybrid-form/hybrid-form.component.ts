import {Component, OnInit} from '@angular/core';
import {Hybrid} from "../hybrid.type";
import {ActivatedRoute, Router} from "@angular/router";
import {HybridService} from "../hybrid.service";
import {IconService} from "@tahoni/neoflora-lib";
import {LegendService} from "../../utils/legend.service";

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

  constructor(router: Router, activatedRoute: ActivatedRoute, hybridService: HybridService,
              iconService: IconService, legendService: LegendService) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.hybridService = hybridService;
    this.iconService = iconService;
    this.legendService = legendService;

    this._hybrid = null;
    this._hybridId = 0;
  }

  private _hybrid: Hybrid | null;

  get hybrid(): Hybrid | null {
    return this._hybrid;
  }

  set hybrid(value: Hybrid | null) {
    this._hybrid = value;
  }

  private _hybridId: number;

  get hybridId(): number {
    return this._hybridId;
  }

  set hybridId(value: number) {
    this._hybridId = value;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this._hybridId = Number(params['id']);
        const hybrid: Hybrid | null = this.hybridService.getHybridById(this._hybridId);
        this._hybrid = hybrid ? {...hybrid} as Hybrid : null;
      });
  }

  submit() {
    return true;
  }

  cancel() {
    this.router.navigate([this.hybridService.getHybridSummaryPath()]).then();
  }

}
