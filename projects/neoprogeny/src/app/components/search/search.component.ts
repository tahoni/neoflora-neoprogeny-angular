import {Component, OnInit} from '@angular/core';
import {IconService} from "neoflora-lib";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public iconService: IconService) {
  }

  ngOnInit(): void {
  }

}
