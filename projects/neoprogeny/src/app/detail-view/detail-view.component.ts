import {Component, OnInit} from '@angular/core';
import {LegendsService} from "../legends.service";

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  legendsService: LegendsService

  constructor(legendsService: LegendsService) {
    this.legendsService = legendsService
  }

  ngOnInit(): void {
  }

}
