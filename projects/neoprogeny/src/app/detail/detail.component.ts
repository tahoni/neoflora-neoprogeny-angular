import {Component, OnInit} from '@angular/core';

import {faLeaf, faGenderless, faSeedling, faMars, faTimes, faVenus, faVenusMars, faImage, faStickyNote} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  faLeaf = faLeaf;
  faGenderless = faGenderless;
  faSeedling = faSeedling;
  faTimes = faTimes;
  faVenusMars = faVenusMars;
  faVenus = faVenus;
  faMars = faMars;
  faImage = faImage;
  faStickyNote = faStickyNote;

  constructor() {
  }

  ngOnInit(): void {
  }

}
