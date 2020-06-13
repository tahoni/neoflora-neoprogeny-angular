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

  getSeedClass(itemSeed: string): string {
    let itemSeedClass: string = '';
    if (this.hasSeed(itemSeed)) {
      itemSeedClass = 'seed';
    } else if (this.hasNoSeed(itemSeed)) {
      itemSeedClass = 'seed-none';
    } else if (this.hasDullSeed(itemSeed)) {
      itemSeedClass = 'seed-dull';
    }
    console.log(itemSeedClass);
    return itemSeedClass;
  }

  getOffspringClass(itemOffspring: string): string {
    let itemOffspringClass = '';
    if (this.hasOffspring(itemOffspring)) {
      itemOffspringClass = 'offspring';
    } else if (this.hasNoOffspring(itemOffspring)) {
      itemOffspringClass = 'offspring-none';
    }
    console.log(itemOffspringClass);
    return itemOffspringClass;
  }

  private hasSeed(itemSeed: string): boolean {
    if (this.seed.includes(itemSeed)) {
      return true;
    }
  }

 private hasNoSeed(itemSeed: string): boolean {
    if (this.seed_none.includes(itemSeed)) {
      return true;
    }
  }

 private hasDullSeed(itemSeed: string): boolean {
    if (this.seed_dull.includes(itemSeed)) {
      return true;
    }
  }

 private hasOffspring(itemOffspring: string): boolean {
    if (this.offspring.includes(itemOffspring)) {
      return true;
    }
  }

 private hasNoOffspring(itemOffspring: string): boolean {
    if (this.offspring_none.includes(itemOffspring)) {
      return true;
    }
  }
}
