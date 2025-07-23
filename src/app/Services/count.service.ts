import { Injectable } from '@angular/core';
import { modesList } from '../utils/lists';
import { Mode } from '../interfaces/Mode';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountService {
  // modes
  modeSelectedSubject = new BehaviorSubject<Mode>(modesList[0]);
  modeSelected$ = this.modeSelectedSubject.asObservable();

  constructor() {}

  getModes(): Mode[] {
    return modesList;
  }

  selectMode(mode: Mode) {
    this.modeSelectedSubject.next(mode);
  }

  updateModeMinutes(modeValue: string, newMinutes: number) {
    const mode = this.getModes().find(m => m.value === modeValue);
    if (mode) {
      mode.minutes = newMinutes;
      if (this.modeSelectedSubject.value.value === modeValue) {
        this.modeSelectedSubject.next(mode);
        localStorage.setItem('mode', JSON.stringify(mode));
      }
    }
  }
}
