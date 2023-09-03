import { Injectable } from '@angular/core';
import { OffspringType } from '../types/offspring.type';

@Injectable({
  providedIn: 'root',
})
export class OffspringService {
  private offspringList: OffspringType[];

  constructor() {
    this.offspringList = this.initOffspringList();
  }

  getAllOffspring = (): OffspringType[] => this.offspringList.slice();

  private initOffspringList = (): OffspringType[] => {
    return [];
  }
}
