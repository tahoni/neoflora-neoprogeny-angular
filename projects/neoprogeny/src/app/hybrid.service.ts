import {Injectable} from '@angular/core';
import {cloneDeep} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class HybridService {

  default_hybrid =
    {
      id: 0,
      code: '',
      parent: '',
      description: '',
      seed: '',
      offspring: ''
    };

  hybrids = [
    {
      id: 1,
      code: '19001',
      parent: '',
      description: 'Nommer 19001',
      seed: 'Geen saad',
      offspring: 'Geen nageslag'
    },
    {
      id: 2,
      code: '19002',
      parent: '',
      description: 'Nommer 19002',
      seed: 'Saad',
      offspring: 'Nageslag'
    },
    {
      id: 3,
      code: '19003',
      parent: '19001 x 19002',
      description: 'Nommer 19003 (19001 x 19002)',
      seed: 'Dowwe saad',
      offspring: 'Geen nageslag'
    }
  ]

  constructor() {
  }

  getHybrids() {
    return this.hybrids.slice();
  }

  getHybrid(id: number) {
    let hybrid: any = this.default_hybrid;
    if (id > 0) {
      hybrid = this.hybrids.find(hybrid => hybrid.id == id);
    }
    return cloneDeep(hybrid);
  }
}
