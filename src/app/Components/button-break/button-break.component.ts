import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mode } from 'src/app/interfaces/Mode';
@Component({
  selector: 'app-button-break',
  templateUrl: './button-break.component.html'
})
export class ButtonBreakComponent {
  @Input() modes: Mode[] = [];
  @Input() selectedMode!: Mode;
  @Output() changeMode = new EventEmitter<Mode>();

  onSelect(mode: Mode) {
    this.changeMode.emit(mode);
    console.log(mode);
  }
}
