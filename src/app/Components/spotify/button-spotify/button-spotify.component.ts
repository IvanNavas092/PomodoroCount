import { Component, OnInit } from '@angular/core';
import { AuthSpotifyService } from 'src/app/Services/auth-spotify.service';

@Component({
  selector: 'app-button-spotify',
  templateUrl: './button-spotify.component.html'
})
export class ButtonSpotifyComponent {
  constructor(private authService: AuthSpotifyService) {}

  loginWithSpotify() {
    this.authService.loginWithSpotify();
  }
}
