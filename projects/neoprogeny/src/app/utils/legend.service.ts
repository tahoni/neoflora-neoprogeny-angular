import { Injectable } from '@angular/core';
import {getSeedLegend, Seed, SeedLegend} from "../types/seed.type";
import {getOffspring, getOffspringLegend, OffspringLegend} from "../types/offspring";

@Injectable({
  providedIn: 'root'
})
export class LegendService {

  constructor() { }

  getSeedLegends(): string[] {
    return Object.keys(SeedLegend);
  }

  getOffspringLegends(): string[] {
    return Object.keys(OffspringLegend);
  }
}
