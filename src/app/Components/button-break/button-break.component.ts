import { Component, Input } from '@angular/core';
import { BreakOption } from 'src/app/interfaces/BreakOption';
@Component({
  selector: 'app-button-break',
  templateUrl: './button-break.component.html',
})
  
export class ButtonBreakComponent {
  list: BreakOption[] = [
    {
      text:'Pomodoro',
      isActive: true,
    },
    {
      text: 'Short break',
      isActive: false,
    },
    {
      text: 'Long break',
      isActive: false
    }
  ]

  toggleoption(index: number): void {
    this.list.forEach((item, i) => {
      item.isActive = i === index;
    });
  }
}
