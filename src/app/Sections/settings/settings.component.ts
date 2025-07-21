import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Background } from 'src/app/interfaces/background';
import { ModalBackgroundService } from 'src/app/Services/modal-background.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent   {
  constructor(public modalBackgroundService: ModalBackgroundService) { }
  backgroundSelected = this.modalBackgroundService.backgroundSelected$;

  closeModalSettings() {
    this.modalBackgroundService.closeModal();
  }
}
