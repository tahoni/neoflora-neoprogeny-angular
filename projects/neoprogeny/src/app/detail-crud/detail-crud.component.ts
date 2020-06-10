import {Component, Input, OnInit} from '@angular/core';
import {LegendService} from "../legend.service";
import {IconService} from "../icon.service";

@Component({
  selector: 'app-detail-crud',
  templateUrl: './detail-crud.component.html',
  styleUrls: ['./detail-crud.component.css']
})
export class DetailCrudComponent implements OnInit {

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
