import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalBackgroundService } from 'src/app/Services/modal-background.service';

@Component({
  selector: 'app-control-buttons',
  templateUrl: './control-buttons.component.html',
})
export class ControlButtonsComponent {
  constructor(private modalBackgroundService: ModalBackgroundService) { }

  @Input() isRunning: boolean = false;
  @Output() start = new EventEmitter<void>();
  @Output() pause = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  openModalSettings() {
    this.modalBackgroundService.openModal();
  }

}

