import {Injectable} from '@angular/core';
import {
  faEllipsisH,
  faGenderless,
  faImage,
  faLeaf,
  faMars,
  faSeedling,
  faStickyNote,
  faTimes,
  faVenus,
  faVenusMars,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";

@Injectable({
  providedIn: 'root'
})
export class LegendsService {

  private iconDescription: IconDefinition = faLeaf;
  private iconSeed: IconDefinition = faGenderless;
  private iconOffspring: IconDefinition = faSeedling;
  private iconMultiplaction: IconDefinition = faTimes;
  private iconVenusMars: IconDefinition = faVenusMars;
  private iconVenus: IconDefinition = faVenus;
  private iconMars: IconDefinition = faMars;
  private iconPhoto: IconDefinition = faImage;
  private iconComments: IconDefinition = faStickyNote;
  private iconMore: IconDefinition = faEllipsisH;

  constructor() {
  }

  getDescriptionIcon() {
    return this.iconDescription;
  }

  getSeedIcon() {
    return this.iconSeed;
  }

  getOffspringIcon() {
    return this.iconOffspring;
  }

  getMutiplicationIcon() {
    return this.iconMultiplaction;
  }

  getVenusMarsIcon() {
    return this.iconVenusMars;
  }

  getVenusIcon() {
    return this.iconVenus
  }

  getMarsIcon() {
    return this.iconMars;
  }

  getPhotoIcon() {
    return this.iconPhoto;
  }

  getCommentsIcon() {
    return this.iconComments
  }

  getMoreIcon() {
    return this.iconMore;
  }
}
