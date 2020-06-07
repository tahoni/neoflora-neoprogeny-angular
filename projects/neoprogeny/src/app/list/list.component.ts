import { Component, OnInit } from '@angular/core';

import {faLeaf, faGenderless, faSeedling, faEllipsisH, faVenusMars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  faDescription = faLeaf;
  faVenusMars = faVenusMars;
  faSeed = faGenderless;
  faOffspring = faSeedling;
  faMore = faEllipsisH;

  constructor() { }

  ngOnInit(): void {
  }

}
