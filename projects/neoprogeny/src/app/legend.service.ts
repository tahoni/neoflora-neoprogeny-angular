import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LegendService {

  seed = [
    'Saad'
  ]
  seed_none = [
    'Geen saad'
  ]
  seed_dull = [
    'Dowwe saad'
  ]

  offspring = [
    'Nageslag'
  ]
  offspring_none = [
    'Geen nageslag'
  ]

  constructor() {
  }

  hasSeed(itemSeed: string) {
    if (this.seed.includes(itemSeed)) {
      return true;
    }
  }

  hasNoSeed(itemSeed: string) {
    if (this.seed_none.includes(itemSeed)) {
      return true;
    }
  }

  hasDullSeed(itemSeed: string) {
    if (this.seed_dull.includes(itemSeed)) {
      return true;
    }
  }

  hasOffspring(itemOffspring: string) {
    if (this.offspring.includes(itemOffspring)) {
      return true;
    }
  }

  hasNoOffspring(itemOffspring: string) {
    if (this.offspring.includes(itemOffspring)) {
      return true;
    }
  }
}
