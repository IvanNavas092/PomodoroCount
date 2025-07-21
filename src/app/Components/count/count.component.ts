import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
})
export class CountComponent {
  @Input() time: string = '00:00';
}
