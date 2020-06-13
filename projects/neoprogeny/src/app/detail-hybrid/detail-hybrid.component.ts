import {Component, Input, OnInit} from '@angular/core';
import {LegendService} from "../legend.service";
import {IconService} from "../icon.service";

@Component({
  selector: 'app-detail-crud',
  templateUrl: './detail-hybrid.component.html',
  styleUrls: ['./detail-hybrid.component.css']
})
export class DetailHybridComponent implements OnInit {

  iconService: IconService;
  legendService: LegendService;

  @Input() item =
    {id: 0, hybrid: '', parents: '', description: '', seed: '', offspring: ''};

  constructor(iconService: IconService, legendService: LegendService) {
    this.iconService = iconService;
    this.legendService = legendService;
  }

  ngOnInit(): void {
  }

}
