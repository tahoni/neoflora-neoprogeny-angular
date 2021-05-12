import {Injectable} from '@angular/core';

// TODO: read from db and enum
@Injectable({
  providedIn: 'root'
})
export class LegendService {

  private seed = [
    {code: 'seed', description: 'Saad'},
    {code: 'seed-dull', description: 'Dowwe saad'},
    {code: 'seed-none', description: 'Geen saad'},
  ]

  private offspring = [
    {code: 'offspring', description: 'Nageslag'},
    {code: 'offspring-none', description: 'Geen nageslag'},
    {code: 'offspring-germinate', description: 'Ontkiem'}
  ]

  constructor() {
  }

  getDefaultSeed(): string {
    return this.seed[0].code;
  }

  getSeed() {
    return this.seed;
  }

  getDefaultOffspring(): string {
    return this.offspring[0].code;
  }

  getOffspring() {
    return this.offspring;
  }

}
