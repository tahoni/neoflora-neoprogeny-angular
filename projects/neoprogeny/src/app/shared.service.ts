import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  redirect(url: string) {
    window.location.href = url;
  }
}
