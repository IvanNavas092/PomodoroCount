import { Injectable } from '@angular/core';
import { modesList } from '../utils/lists';
import { Mode } from '../interfaces/Mode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private _modes: Mode[];
  private modeSelectedSubject: BehaviorSubject<Mode>;

  constructor() {
    // Cargar modos desde localStorage o usar los por defecto
    const savedModes = localStorage.getItem('pomodoro-modes');
    this._modes = savedModes ? JSON.parse(savedModes) : [...modesList];

    // Cargar modo actual desde localStorage o usar el primero por defecto
    const savedCurrentMode = localStorage.getItem('current-mode');
    const initialMode = savedCurrentMode ? JSON.parse(savedCurrentMode) : this._modes[0];

    this.modeSelectedSubject = new BehaviorSubject<Mode>(initialMode);
  }

  getModes(): Mode[] {
    return this._modes;
  }

  selectMode(mode: Mode) {
    // Actualizar el modo en el array
    const index = this._modes.findIndex(m => m.value === mode.value);
    if (index !== -1) {
      this._modes[index] = mode;
    }

    this.modeSelectedSubject.next(mode);
    this.saveToStorage();
  }

  updateModeMinutes(modeValue: string, newMinutes: number) {
    const mode = this._modes.find(m => m.value === modeValue);
    if (mode) {
      mode.minutes = newMinutes;
      if (this.modeSelectedSubject.value.value === modeValue) {
        this.selectMode(mode); // Esto guardará automáticamente
      } else {
        this.saveToStorage();
      }
    }
  }

  private saveToStorage(): void {
    localStorage.setItem('pomodoro-modes', JSON.stringify(this._modes));
    localStorage.setItem('current-mode', JSON.stringify(this.modeSelectedSubject.value));
  }

  get modeSelected$() {
    return this.modeSelectedSubject.asObservable();
  }
}
