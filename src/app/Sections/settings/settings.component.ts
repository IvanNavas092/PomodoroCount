import { Component } from '@angular/core';
import { ModalBackgroundService } from 'src/app/Services/modal-background.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  constructor(public modalBackgroundService: ModalBackgroundService) {}
  backgroundSelected = this.modalBackgroundService.backgroundSelected$;

  closeModalSettings() {
    this.modalBackgroundService.closeModal();
  }
}
