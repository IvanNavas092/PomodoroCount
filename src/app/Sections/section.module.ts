import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionCountAndBreaksComponent } from './section-count-and-breaks/section-count-and-breaks.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../Components/shared.module';
import { ModalBackgroundService } from '../Services/modal-background.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [SectionCountAndBreaksComponent, SettingsComponent, AllComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [SectionCountAndBreaksComponent, SettingsComponent, AllComponent],
  providers: [ModalBackgroundService]
})
export class SectionModule {}
