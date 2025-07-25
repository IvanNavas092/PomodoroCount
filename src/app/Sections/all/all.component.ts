import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthSpotifyService } from 'src/app/Services/auth-spotify.service';
import { ModalBackgroundService } from 'src/app/Services/modal-background.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styles: []
})
export class AllComponent implements OnInit {
  @ViewChild('fullscreenDiv') fullscreenDiv!: ElementRef;
  isFull: boolean = false;
  // check if the modal is open
  isOpenModal: boolean = false;
  // suscribe in the modal service
  constructor(
    private modalBackgroundService: ModalBackgroundService,
    private authService: AuthSpotifyService
  ) {
    this.modalBackgroundService.isOpen$.subscribe(isOpen => (this.isOpenModal = isOpen));
  }
  isLoggedIn = this.authService.isLoggedIn$;
  ngOnInit() {
    this.authService.checkToken();
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
