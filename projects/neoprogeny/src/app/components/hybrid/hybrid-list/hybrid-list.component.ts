import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hybrid-list',
  templateUrl: './hybrid-list.component.html',
  styleUrls: ['./hybrid-list.component.css']
})
export class HybridListComponent implements OnInit {

  @Input() hybrids;

  constructor() {
  }

  ngOnInit(): void {
  }

}
