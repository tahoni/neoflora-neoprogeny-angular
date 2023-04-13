import {Component, Input, OnInit} from '@angular/core';
import {Hybrid} from "../../../types/hybrid.type";

@Component({
  selector: 'app-hybrid-list',
  templateUrl: './hybrid-list.component.html',
  styleUrls: ['./hybrid-list.component.scss', '../hybrid.scss']
})
export class HybridListComponent implements OnInit {

  @Input() hybrids: Hybrid[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
