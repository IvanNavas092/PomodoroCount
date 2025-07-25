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
import { ButtonSpotifyComponent } from './spotify/button-spotify/button-spotify.component';
import { CallbackComponent } from './spotify/callback/callback.component';
import { ErrorComponent } from './spotify/error/error.component';
import { PlayerMusicComponent } from './spotify/player-music/player-music.component';

@NgModule({
  declarations: [
    ButtonBreakComponent,
    CountComponent,
    ControlButtonsComponent,
    BgComponent,
    ModalBackgroundComponent,
    BoxBgComponent,
    SettingsSectionModalComponent,
    ButtonSpotifyComponent,
    CallbackComponent,
    ErrorComponent,
    PlayerMusicComponent
  ],
  imports: [CommonModule, BrowserAnimationsModule, FormsModule],
  exports: [
    ButtonBreakComponent,
    CountComponent,
    ControlButtonsComponent,
    BgComponent,
    ModalBackgroundComponent,
    BoxBgComponent,
    SettingsSectionModalComponent,
    ButtonSpotifyComponent,
    CallbackComponent,
    ErrorComponent,
    PlayerMusicComponent
  ],
  providers: [ModalBackgroundService]
})
export class SharedModule {}
