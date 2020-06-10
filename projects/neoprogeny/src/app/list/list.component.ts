import {Component, OnInit} from '@angular/core';
import {LegendsService} from "../legends.service";
import {DataService} from "../data.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  legendsService: LegendsService;
  hybridService: DataService;

  constructor(legendsService: LegendsService, hybridService: DataService) {
    this.legendsService = legendsService;
    this.hybridService = hybridService;
  }

  ngOnInit(): void {
  }

}
