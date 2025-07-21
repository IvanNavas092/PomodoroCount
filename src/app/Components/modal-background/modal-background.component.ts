import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Background } from 'src/app/interfaces/background';
import { ModalBackgroundService } from 'src/app/Services/modal-background.service';

@Component({
  selector: 'app-modal-background',
  templateUrl: './modal-background.component.html'
})
export class ModalBackgroundComponent {
  constructor(private modalBackgroundService: ModalBackgroundService) {}

  @Input() isOpen: boolean = false;
  @Input() listOfBgs: Background[] = this.modalBackgroundService.backgrounds$.value;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  trackByFn(index: number, item: any): any {
    return item.id;
  }

  selectBg(bg: Background) {
    this.modalBackgroundService.selectBackground(bg);
    this.closeModal();
  }
}
