import {Component, OnInit} from '@angular/core';

import {
  faGenderless,
  faImage,
  faLeaf,
  faMars,
  faSeedling,
  faStickyNote,
  faTimes,
  faVenus,
  faVenusMars
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  faDescription = faLeaf;
  faSeed = faGenderless;
  faOffspring = faSeedling;
  faTimes = faTimes;
  faVenusMars = faVenusMars;
  faVenus = faVenus;
  faMars = faMars;
  faPhoto = faImage;
  faComments = faStickyNote;

  constructor() {
  }

  ngOnInit(): void {
  }

}
