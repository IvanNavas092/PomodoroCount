import { Component, Input } from '@angular/core';
import { CountService } from 'src/app/Services/count.service';

@Component({
  selector: 'app-settings-section-modal',
  templateUrl: './settings-section-modal.component.html'
})
export class SettingsSectionModalComponent {
  constructor(private countService: CountService) {}
}
