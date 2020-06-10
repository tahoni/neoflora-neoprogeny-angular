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
  selector: 'app-detail-crud',
  templateUrl: './detail-crud.component.html',
  styleUrls: ['./detail-crud.component.css']
})
export class DetailCrudComponent implements OnInit {

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
