import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {HybridService} from "../hybrid.service";
import {Hybrid} from "../hybrid.type";

@Component({
  selector: 'app-hybrid-summary',
  templateUrl: './hybrid-summary.component.html',
  styleUrls: ['./hybrid-summary.component.scss']
})
export class HybridSummaryComponent implements OnInit, OnDestroy {

  private hybridsChangedSubscription: Subscription;
  private hybridService: HybridService;

  private _hybrids: Hybrid[] = [];

  constructor(hybridService: HybridService) {
    this.hybridService = hybridService;
    this.hybridsChangedSubscription = new Subscription();
  }

  ngOnInit(): void {
    this._hybrids = this.hybridService.getAllHybrids();
    this.hybridsChangedSubscription = this.hybridService.getHybridsChanged().subscribe(
      () => {
        this._hybrids = this.hybridService.getAllHybrids();
      }
    )
  }

  ngOnDestroy(): void {
    this.hybridsChangedSubscription.unsubscribe();
  }

  get hybrids(): Hybrid[] {
    return this._hybrids;
  }
}
