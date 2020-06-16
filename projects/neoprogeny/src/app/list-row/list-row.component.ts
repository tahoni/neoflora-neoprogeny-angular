import {Component, Input, OnInit} from '@angular/core';
import {IconService} from "../icon.service";

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {

  @Input() hybrid;

  constructor(public iconService: IconService) {
  }

  ngOnInit(): void {
  }

}
