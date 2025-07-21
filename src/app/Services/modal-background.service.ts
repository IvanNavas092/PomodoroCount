import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Background } from '../interfaces/background';

@Injectable()
export class ModalBackgroundService {
  // open the settings modal
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  // selected background
  private backgroundsList: Background[] = [
    {
      name: 'focus',
      image: 'assets/bgs/london.jpg',
      label: 'focus'
    },
    {
      name: 'study',
      image: 'assets/bgs/study.jpg',
      label: 'Study'
    },
    {
      name: 'chill',
      image: 'assets/bgs/chill.jpg',
      label: 'Chill'
    },
    {
      name: 'night',
      image: 'assets/bgs/night.jpg',
      label: 'Night'
    },
    {
      name: 'vacation',
      image: 'assets/bgs/vacation.jpg',
      label: 'Vacation'
    },
    {
      name: 'lo-fi',
      image: 'assets/bgs/lo-fi.jpg',
      label: 'Lo-Fi	'
    },
    {
      name: 'nature',
      image: 'assets/bgs/nature.jpg',
      label: 'Nature'
    },
    {
      name: 'fire',
      image: 'assets/bgs/fire.jpg',
      label: 'Fire'
    },
    {
      name: 'minimal',
      image: 'assets/bgs/minimal.jpg',
      label: 'Minimal'
    },
    {
      name: 'fire',
      image: 'assets/bgs/fire.jpg',
      label: 'Fire'
    },
    {
      name: 'cyber',
      image: 'assets/bgs/cyber.jpg',
      label: 'Cyber'
    },
    {
      name: 'anime',
      image: 'assets/bgs/anime.jpg',
      label: 'Anime'
    },
    {
      name: 'space',
      image: 'assets/bgs/space.jpg',
      label: 'Space'
    }
  ];
  private backgroundSelectedSubject = new BehaviorSubject<Background>(this.backgroundsList[0]);
  backgroundSelected$ = this.backgroundSelectedSubject.asObservable();

  // list of backgrounds
  backgrounds$ = new BehaviorSubject<Background[]>(this.backgroundsList);

  // select the background
  selectBackground(background: Background) {
    this.backgroundSelectedSubject.next(background);
  }

  // open the modal (settings)
  openModal() {
    this.isOpenSubject.next(true);
  }
  // close the modal (settings)
  closeModal() {
    this.isOpenSubject.next(false);
  }

  toggleModal() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }
}
