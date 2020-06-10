import {Component, Input, OnInit} from '@angular/core';
import {IconService} from "../icon.service";
import {LegendService} from "../legend.service";

@Component({
  selector: 'tr[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

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
