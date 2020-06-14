import {Component, OnDestroy, OnInit} from '@angular/core';
import {HybridService} from "../hybrid.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnDestroy {

  hybridService: HybridService;

  hybridsChangedSubscription: Subscription;

  hybrids = [];

  constructor(hybridService: HybridService) {
    this.hybridService = hybridService;
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
