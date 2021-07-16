import {Component, Input, OnInit} from '@angular/core';
import {IconService} from 'neoflora-lib';
import {HybridService} from '../../hybrid.service';
import {HybridType} from '../../hybrid-types/hybrid-type';

@Component({
  selector: 'app-hybrid-list-row',
  templateUrl: './hybrid-list-row.component.html',
  styleUrls: ['./hybrid-list-row.component.css', '../../hybrid.css']
})
export class HybridListRowComponent implements OnInit {

  @Input() hybrid: HybridType;

  constructor(public iconService: IconService, public hybridService: HybridService) {
  }

  ngOnInit(): void {
  }

}
