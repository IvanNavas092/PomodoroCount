import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Background } from '../interfaces/background';
import { backgroundsList } from '../utils/lists';

@Injectable()
export class ModalBackgroundService {
  private backgroundSelectedSubject = new BehaviorSubject<Background>(
    ModalBackgroundService.getInitialBackground()
  );
  backgroundSelected$ = this.backgroundSelectedSubject.asObservable();

  // open the settings modal
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  // list of backgrounds
  backgrounds$ = new BehaviorSubject<Background[]>(backgroundsList);

  constructor() {}
  // getInitial background
  static getInitialBackground(): Background {
    try {
      const stored = localStorage.getItem('background');
      return stored ? JSON.parse(stored) : backgroundsList[0];
    } catch (error) {
      console.warn('Error al leer el fondo del localStorage. Usando fondo por defecto.', error);
      return backgroundsList[0];
    }
  }

  // select the background
  selectBackground(background: Background) {
    this.backgroundSelectedSubject.next(background);
    localStorage.setItem('background', JSON.stringify(background));
    this.closeModal();
  }

  // open the modal (settings)
  openModal() {
    this.isOpenSubject.next(true);
  }
  // close the modal (settings)
  closeModal() {
    this.isOpenSubject.next(false);
  }
  // toggle the modal (settings)
  toggleModal() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }
}
