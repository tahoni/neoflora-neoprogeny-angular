import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {OffspringType} from "./offspring.type";

@Injectable({
  providedIn: 'root'
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
