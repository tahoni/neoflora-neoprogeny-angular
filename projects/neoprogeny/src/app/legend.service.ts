import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LegendService {

  private seed = [
    'Saad'
  ]
  private seedNone = [
    'Geen saad'
  ]
  private seedDull = [
    'Dowwe saad'
  ]

  private offspring = [
    'Nageslag'
  ]
  private offspringNone = [
    'Geen nageslag'
  ]

  constructor() {
  }

  getSeedClass(itemSeed: string): string {
    let itemSeedClass: string = '';
    if (this.hasSeed(itemSeed)) {
      itemSeedClass = 'seed';
    } else if (this.hasNoSeed(itemSeed)) {
      itemSeedClass = 'seed-none';
    } else if (this.hasDullSeed(itemSeed)) {
      itemSeedClass = 'seed-dull';
    }
    return itemSeedClass;
  }

  getOffspringClass(itemOffspring: string): string {
    let itemOffspringClass = '';
    if (this.hasOffspring(itemOffspring)) {
      itemOffspringClass = 'offspring';
    } else if (this.hasNoOffspring(itemOffspring)) {
      itemOffspringClass = 'offspring-none';
    }
    return itemOffspringClass;
  }

  hasSeed(itemSeed: string): boolean {
    if (this.seed.includes(itemSeed)) {
      return true;
    }
  }

 hasNoSeed(itemSeed: string): boolean {
    if (this.seedNone.includes(itemSeed)) {
      return true;
    }
  }

 hasDullSeed(itemSeed: string): boolean {
    if (this.seedDull.includes(itemSeed)) {
      return true;
    }
  }

 hasOffspring(itemOffspring: string): boolean {
    if (this.offspring.includes(itemOffspring)) {
      return true;
    }
  }

 hasNoOffspring(itemOffspring: string): boolean {
    if (this.offspringNone.includes(itemOffspring)) {
      return true;
    }
  }
}
