import {Injectable} from '@angular/core';
import {
  faEllipsisH,
  faGenderless,
  faImage,
  faLeaf,
  faMars,
  faSearch,
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
export class IconService {

  private iconDescription: IconDefinition = faLeaf;
  private iconSeed: IconDefinition = faGenderless;
  private iconOffspring: IconDefinition = faSeedling;
  private iconMultiplication: IconDefinition = faTimes;
  private iconVenusMars: IconDefinition = faVenusMars;
  private iconVenus: IconDefinition = faVenus;
  private iconMars: IconDefinition = faMars;
  private iconPhoto: IconDefinition = faImage;
  private iconComment: IconDefinition = faStickyNote;
  private iconMore: IconDefinition = faEllipsisH;
  private iconSearch: IconDefinition = faSearch;

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

  getMultiplicationIcon() {
    return this.iconMultiplication;
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

  getCommentIcon() {
    return this.iconComment
  }

  getMoreIcon() {
    return this.iconMore;
  }

  getSearchIcon() {
    return this.iconSearch;
  }

}
