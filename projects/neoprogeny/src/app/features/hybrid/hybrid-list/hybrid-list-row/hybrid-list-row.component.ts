import {Component, Input, OnInit} from '@angular/core';
import {Hybrid} from "../../../../types/hybrid.type";
import {HybridService} from "../../hybrid.service";
import {IconService} from "@tahoni/neoflora-lib";

@Component({
  selector: 'app-hybrid-list-row',
  templateUrl: './hybrid-list-row.component.html',
  styleUrls: ['./hybrid-list-row.component.scss', '../hybrid-list.component.scss', '../../hybrid.scss']
})
export class HybridListRowComponent implements OnInit {

  @Input() hybrid: Hybrid | undefined;

  iconService: IconService;
  hybridService: HybridService;

  constructor(iconService: IconService, hybridService: HybridService) {
    this.iconService = iconService;
    this.hybridService = hybridService;
  }

  ngOnInit(): void {
  }

}
