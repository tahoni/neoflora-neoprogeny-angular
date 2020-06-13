import {Component, OnInit} from '@angular/core';
import {HybridService} from "../hybrid.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  hybridService: HybridService;

  hybrids = [];

  constructor(hybridService: HybridService) {
    this.hybridService = hybridService;
  }

  ngOnInit(): void {
    this.hybrids = this.hybridService.getHybrids()
  }

}
