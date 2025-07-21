import { Component, Input, OnInit } from '@angular/core';
import { Background } from 'src/app/interfaces/background';
import { ModalBackgroundService } from 'src/app/Services/modal-background.service';
@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html'
})
export class BgComponent implements OnInit {
  constructor(private modalBackgroundService: ModalBackgroundService) {}

  selectedBg: Background | null = null;

  ngOnInit(): void {
    this.updateBg();
  }

  updateBg() {
    this.modalBackgroundService.backgroundSelected$.subscribe(data => {
      this.selectedBg = data;
    });
  }
}
