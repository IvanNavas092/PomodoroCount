import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBreakComponent } from './button-break/button-break.component';
import { CountComponent } from './count/count.component';
import { ControlButtonsComponent } from './control-buttons/control-buttons.component';
import { BgComponent } from './bg/bg.component';
import { ModalBackgroundComponent } from './modal-background/modal-background.component';
import { BoxBgComponent } from './box-bg/box-bg.component';
import { ModalBackgroundService } from '../Services/modal-background.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ButtonBreakComponent,
    CountComponent,
    ControlButtonsComponent,
    BgComponent,
    ModalBackgroundComponent,
    BoxBgComponent
  ],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [
    ButtonBreakComponent,
    CountComponent,
    ControlButtonsComponent,
    BgComponent,
    ModalBackgroundComponent,
    BoxBgComponent
  ],
  providers: [ModalBackgroundService]
})
export class SharedModule {}
