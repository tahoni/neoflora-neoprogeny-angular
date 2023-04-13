import { Component, OnInit } from '@angular/core';
import {IconService} from "@tahoni/neoflora-lib";

@Component({
  selector: 'app-hybrid-list-head',
  templateUrl: './hybrid-list-head.component.html',
  styleUrls: ['./hybrid-list-head.component.scss', '../hybrid-list.component.scss', '../../hybrid.scss']
})
export class HybridListHeadComponent implements OnInit {
  readonly iconService: IconService;

  constructor(iconService: IconService) {
    this.iconService = iconService;
  }

  ngOnInit(): void {
  }

}
