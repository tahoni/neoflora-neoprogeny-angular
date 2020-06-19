import {Component, Input, OnInit} from '@angular/core';
import {IconService} from "../../../shared/icon.service";
import {HybridService} from "../../hybrid.service";

@Component({
  selector: 'app-hybrid-list-row',
  templateUrl: './hybrid-list-row.component.html',
  styleUrls: ['./hybrid-list-row.component.css']
})
export class HybridListRowComponent implements OnInit {

  @Input() hybrid;

  constructor(public iconService: IconService, public hybridService: HybridService) {
  }

  ngOnInit(): void {
  }

}
