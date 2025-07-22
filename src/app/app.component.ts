import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';
import { environment } from 'src/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PomodoroCount';

  @ViewChild('fullscreenDiv') fullscreenDiv!: ElementRef;
  isFull: boolean = false;

  ngOnInit() {
    document.addEventListener('fullscreenchange', () => {
      this.isFull = !!document.fullscreenElement;
    });

    const cld = new Cloudinary({
      cloud: {
        cloudName: environment.cloudinary.cloudName
      }
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
