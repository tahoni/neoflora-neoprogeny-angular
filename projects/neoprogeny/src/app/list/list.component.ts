import {Component, OnInit} from '@angular/core';
import {LegendsService} from "../legends.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  legendsService: LegendsService;

  constructor(legendsService: LegendsService) {
    this.legendsService = legendsService;
  }

  ngOnInit(): void {
  }

}
