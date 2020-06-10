import {Component, OnInit} from '@angular/core';
import {LegendsService} from "../legends.service";

@Component({
  selector: 'app-detail-crud',
  templateUrl: './detail-crud.component.html',
  styleUrls: ['./detail-crud.component.css']
})
export class DetailCrudComponent implements OnInit {

  legendsService: LegendsService;

  constructor(legendsService: LegendsService) {
    this.legendsService = legendsService;
  }

  ngOnInit(): void {
  }

}
