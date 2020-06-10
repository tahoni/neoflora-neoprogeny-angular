import {Injectable} from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})
export class LegendsService {

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
}
