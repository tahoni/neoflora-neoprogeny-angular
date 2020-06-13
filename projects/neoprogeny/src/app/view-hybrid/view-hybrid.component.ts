import {Component, Input, OnInit} from '@angular/core';
import {LegendService} from "../legend.service";
import {IconService} from "../icon.service";

@Component({
  selector: 'app-detail-view',
  templateUrl: './view-hybrid.component.html',
  styleUrls: ['./view-hybrid.component.css']
})
export class ViewHybridComponent implements OnInit {

  iconService: IconService;
  legendService: LegendService;

  @Input() item;

  constructor(iconService: IconService, legendService: LegendService) {
    this.iconService = iconService;
    this.legendService = legendService;
  }

  ngOnInit(): void {
  }

}
