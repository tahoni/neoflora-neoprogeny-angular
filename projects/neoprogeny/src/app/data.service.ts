import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  hybrids = [
    {
      id: 1,
      cross: '19001',
      parent: '',
      description: 'Nommer 19001',
      seed: 'Geen saad',
      offspring: 'Geen nageslag'
    },
    {
      id: 2,
      cross: '19002',
      parent: '',
      description: 'Nommer 19002',
      seed: 'Saad',
      offspring: 'Nageslag'
    },
    {
      id: 3,
      cross: '19003',
      parent: '19001 x 19002',
      description: 'Nommer 19003 (19001 x 19002)',
      seed: 'Dowwe saad',
      offspring: 'Geen nageslag'
    }
  ]

  constructor() {
  }

  getHybrids() {
    return this.hybrids;
  }
}
