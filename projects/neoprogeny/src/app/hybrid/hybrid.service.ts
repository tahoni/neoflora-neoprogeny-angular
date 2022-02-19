import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {AppConstants} from "../shared/app.constant";
import {Hybrid} from "./hybrid.type";

@Injectable({
  providedIn: 'root'
})
export class HybridService {
  private hybridsChanged = new Subject<void>();

  private readonly _hybridSummaryPath = '/hybrid/summary';
  private readonly _hybridEditPath = '/hybrid/edit';
  private hybridList: Hybrid[];

  constructor() {
    this.hybridList = HybridService.initHybridList();
  }

  getHybridSummaryPath(): string {
    return this._hybridSummaryPath;
  }

  getHybridEditPath(): string {
    return this._hybridEditPath;
  }

  getHybridsChanged(): Observable<void> {
    return this.hybridsChanged.asObservable();
  }

  getAllHybrids(): Hybrid[] {
    return this.hybridList.slice();
  }

  getHybridById(id: number): Hybrid | null {
    if (!id) {
      return null;
    }

    let hybrid = this.lookupHybridById(id);
    if (!hybrid) {
      return null;
    }

    return {...hybrid} as Hybrid;
  }

  getHybridByCode(code: string): Hybrid | null {
    if (!code) {
      return null;
    }

    let hybrid = this.lookupHybridByCode(code);
    if (!hybrid) {
      return null;
    }

    return {...hybrid} as Hybrid;
  }

  setHybrid(newHybrid: any): void {
    let hybrid: Hybrid;
    let existingHybrid: Hybrid | undefined;

    if (newHybrid.id) {
      existingHybrid = this.lookupHybridById(newHybrid.id);
    }

    hybrid = {...newHybrid}

    if (existingHybrid) {
      this.hybridList.splice(this.hybridList.indexOf(existingHybrid), 1, newHybrid)
    } else {
      this.hybridList.push(hybrid);
    }

    this.hybridsChanged.next();
  }

  private static initHybridList(): Hybrid[] {
    return AppConstants.hybridList;
  }

  private lookupHybridById(id: number): Hybrid | undefined {
    return this.hybridList.find(it => it.id == id);
  }

  private lookupHybridByCode(code: string): Hybrid | undefined {
    return this.hybridList.find(it => it.code == code);
  }

}

