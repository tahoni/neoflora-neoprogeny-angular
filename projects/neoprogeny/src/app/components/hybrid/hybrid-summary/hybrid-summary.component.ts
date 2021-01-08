import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {HybridService} from "../hybrid.service";

@Component({
  selector: 'app-hybrid-summary',
  templateUrl: './hybrid-summary.component.html',
  styleUrls: ['./hybrid-summary.component.css']
})
export class HybridSummaryComponent implements OnInit, OnDestroy {

  hybridsChangedSubscription: Subscription;

  hybrids = [];

  constructor(private hybridService: HybridService) {
  }

  ngOnInit(): void {
    this.hybrids = this.hybridService.getHybrids();
    this.hybridsChangedSubscription = this.hybridService.getHybridsChanged().subscribe(
      () => {
        this.hybrids = this.hybridService.getHybrids();
      }
    )
  }

  ngOnDestroy() {
    this.hybridsChangedSubscription.unsubscribe();
  }

}
