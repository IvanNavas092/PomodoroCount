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
import { SettingsSectionModalComponent } from './modal-background/settings-section-modal/settings-section-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonBreakComponent,
    CountComponent,
    ControlButtonsComponent,
    BgComponent,
    ModalBackgroundComponent,
    BoxBgComponent,
    SettingsSectionModalComponent
  ],
  imports: [CommonModule, BrowserAnimationsModule, FormsModule],
  exports: [
    ButtonBreakComponent,
    CountComponent,
    ControlButtonsComponent,
    BgComponent,
    ModalBackgroundComponent,
    BoxBgComponent,
    SettingsSectionModalComponent
  ],
  providers: [ModalBackgroundService]
})
export class SharedModule {}
