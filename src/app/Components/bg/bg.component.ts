import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Background } from 'src/app/interfaces/background';
import { ModalBackgroundService } from 'src/app/Services/modal-background.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html'
})
export class BgComponent implements OnInit, AfterViewInit {
  constructor(private modalBackgroundService: ModalBackgroundService) {}

  selectedBg: Background | null = null;

  @ViewChild('videoBg') videoRef!: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
    this.modalBackgroundService.backgroundSelected$.subscribe((data: Background) => {
      this.selectedBg = data;
    });
  }

  ngAfterViewInit(): void {
    if (this.videoRef) {
      const video = this.videoRef.nativeElement;
      video.muted = true;
    }
  }
}
