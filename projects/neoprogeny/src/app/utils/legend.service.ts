import { Injectable } from '@angular/core';
import {Seed} from "../types/seed.type";

@Injectable({
  providedIn: 'root'
})
export class LegendService {

  constructor() { }

  getSeedLegends(): string[] {
    return Object.keys(Seed);
  }

  getOffspringLegends(): string[] {
    return Object.keys(Seed);
  }
}
