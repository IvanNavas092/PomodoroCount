import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalBackgroundService } from 'src/app/Services/modal-background.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styles: []
})
export class AllComponent {
  @ViewChild('fullscreenDiv') fullscreenDiv!: ElementRef;
  isFull: boolean = false;
  // check if the modal is open
  isOpenModal: boolean = false;
  // suscribe in the modal service
  constructor(private modalBackgroundService: ModalBackgroundService) {
    this.modalBackgroundService.isOpen$.subscribe(isOpen => (this.isOpenModal = isOpen));
  }

  ngOnInit() {
    document.addEventListener('fullscreenchange', () => {
      this.isFull = !!document.fullscreenElement;
    });
  }

  toggleFullscreen() {
    if (!this.isFull) {
      this.goFullscreen();
    } else {
      this.exitFullscreen();
    }
  }

  goFullscreen() {
    const elem = this.fullscreenDiv.nativeElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    this.isFull = true;
  }

  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    this.isFull = false;
  }
}
