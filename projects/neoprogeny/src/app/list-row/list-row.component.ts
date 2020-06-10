import {Component, Input, OnInit} from '@angular/core';
import {IconService} from "../icon.service";
import {LegendService} from "../legend.service";

@Component({
  selector: 'tr[app-list-row]',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {

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
