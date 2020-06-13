import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LegendService {

  private seed = [
    'Saad'
  ]
  private seed_none = [
    'Geen saad'
  ]
  private seed_dull = [
    'Dowwe saad'
  ]

  private offspring = [
    'Nageslag'
  ]
  private offspring_none = [
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
    if (this.offspring_none.includes(itemOffspring)) {
      return true;
    }
  }
}
