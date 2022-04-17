import {Injectable} from '@angular/core';
import {getSeed, getSeedLegend, Seed} from "../types/seed.type";
import {getOffspring, getOffspringLegend, Offspring} from "../types/offspring.type";

@Injectable({
  providedIn: 'root'
})
export class LegendService {

  constructor() {
  }

  getSeedLegends = () => Object.keys(Seed);
  getSeedType = (value: string) => getSeed(value);
  getSeedLegend = (value: string) => getSeedLegend(value)

  getOffspringLegends = () => Object.keys(Offspring);
  getOffspringType = (value: string) => getOffspring(value);
  getOffspringLegend = (value: string) => getOffspringLegend(value)

}
