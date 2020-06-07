import { Component, OnInit } from '@angular/core';

import {faLeaf, faGenderless, faSeedling, faEllipsisH, faVenusMars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  faLeaf = faLeaf;
  faGenderLess = faGenderless;
  faVenusMars = faVenusMars;
  faSeedling = faSeedling;
  faEllipsisH = faEllipsisH;

  constructor() { }

  ngOnInit(): void {
  }

}
