import { Component, Input } from '@angular/core';
import { CountService } from 'src/app/Services/count.service';

@Component({
  selector: 'app-settings-section-modal',
  templateUrl: './settings-section-modal.component.html'
})
export class SettingsSectionModalComponent {
  pomodoro!: number;
  short!: number;
  long!: number;

  constructor(private countService: CountService) {}

  updateMinutes(modeValue: string, newMinutes: number) {
    this.countService.updateModeMinutes(modeValue, newMinutes);
  }
}
