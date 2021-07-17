import {Injectable} from '@angular/core';
import {
  faCat,
  faCopyright,
  faEllipsisH,
  faGenderless,
  faImage,
  faLeaf,
  faMars,
  faMouse,
  faSearch,
  faSeedling,
  faStickyNote,
  faTimes,
  faVenus,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  private iconDescription = faLeaf;
  private iconSeed = faGenderless;
  private iconOffspring = faSeedling;
  private iconVenusMars = faVenusMars;
  private iconVenus = faVenus;
  private iconMars = faMars;
  private iconPhoto = faImage;
  private iconComment = faStickyNote;
  private iconCopyright = faCopyright;
  private iconMultiplication = faTimes;
  private iconMore = faEllipsisH;
  private iconSearch = faSearch;

  private iconsTahoni = [faCat, faMouse];

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

  getMultiplicationIcon() {
    return this.iconMultiplication;
  }

  getCopyrightIcon() {
    return this.iconCopyright;
  }

  getMoreIcon() {
    return this.iconMore;
  }

  getSearchIcon() {
    return this.iconSearch;
  }

  getTahoniIcons() {
    return this.iconsTahoni;
  }

}
