import { Component, Input } from '@angular/core';
import { Background } from 'src/app/interfaces/background';
import { ModalBackgroundService } from 'src/app/Services/modal-background.service';

@Component({
  selector: 'app-box-bg',
  templateUrl: './box-bg.component.html'
})
export class BoxBgComponent {
  @Input() label!: string;
  @Input() image!: string;
}
