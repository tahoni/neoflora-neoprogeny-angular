import {Component, OnInit} from '@angular/core';
import {LegendService} from "../legend.service";
import {DataService} from "../data.service";
import {IconService} from "../icon.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
  }

}
