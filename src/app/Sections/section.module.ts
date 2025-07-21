import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionCountAndBreaksComponent } from './section-count-and-breaks/section-count-and-breaks.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../Components/shared.module';
import { ModalBackgroundService } from '../Services/modal-background.service';

@NgModule({
  declarations: [SectionCountAndBreaksComponent, SettingsComponent],
  imports: [CommonModule, SharedModule],
  exports: [SectionCountAndBreaksComponent, SettingsComponent],
  providers: [ModalBackgroundService]
})
export class SectionModule {}
