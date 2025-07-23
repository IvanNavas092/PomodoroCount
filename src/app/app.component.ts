import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';
import { environment } from 'src/environment';
import { ModalBackgroundService } from './Services/modal-background.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PomodoroCount';

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
