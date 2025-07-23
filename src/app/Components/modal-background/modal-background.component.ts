import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
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
  tabs = ['Settings', 'Backgrounds'];
  activeTab: string = 'Settings';

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }

  // change tab
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // check if tab is active
  isActiveTab(tab: string) {
    return this.activeTab === tab;
  }

  closeModal() {
    this.close.emit();
  }

  trackByFn(item: any): any {
    return item.id;
  }

  selectBg(bg: Background) {
    this.modalBackgroundService.selectBackground(bg);
    console.log(bg);
  }
}
