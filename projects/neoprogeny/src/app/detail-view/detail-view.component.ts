import {Component, Input, OnInit} from '@angular/core';
import {LegendService} from "../legend.service";
import {IconService} from "../icon.service";

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

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
