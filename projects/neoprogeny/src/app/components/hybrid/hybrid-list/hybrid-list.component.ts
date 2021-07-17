import {Component, Input, OnInit} from '@angular/core';
import {HybridType} from '../hybrid-types/hybrid-type';

@Component({
  selector: 'app-hybrid-list',
  templateUrl: './hybrid-list.component.html',
  styleUrls: ['./hybrid-list.component.scss']
})
export class HybridListComponent implements OnInit {

  @Input() hybrids: HybridType[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
