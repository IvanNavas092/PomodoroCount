import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthSpotifyService } from 'src/app/Services/auth-spotify.service';

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: any;
    Spotify: any;
  }
}

@Component({
  selector: 'app-player-music',
  templateUrl: './player-music.component.html'
})
export class PlayerMusicComponent implements OnInit {
  player: any;
  deviceId: string = '';
  currentTrack: any = null;
  volume: number = 0.5;
  isPlaying = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const token = localStorage.getItem('spotify_token');
    if (!token) return;

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Mini Player',
        getOAuthToken: (cb: (token: string) => void) => {
          cb(token);
        },
        volume: this.volume
      });

      player.addListener('player_state_changed', (state: any) => {
        console.log('player_state_changed:', state);
        if (!state) {
          this.currentTrack = null;
          this.isPlaying = false;
          this.cdr.detectChanges(); // <--- ESTA LÍNEA ES CLAVE
          return;
        }

        const track = state.track_window?.current_track;
        console.log('current_track:', track);
        this.currentTrack = track;
        this.isPlaying = !state.paused;
        this.cdr.detectChanges(); // <--- ESTA LÍNEA ES CLAVE
      });

      player.connect();
      this.player = player;
    };
  }

  async transferPlayback(token: string, deviceId: string) {
    await fetch('https://api.spotify.com/v1/me/player', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        device_ids: [deviceId],
        play: false
      })
    });
  }

  togglePlay() {
    this.player.togglePlay();
  }

  nextTrack() {
    const token = localStorage.getItem('spotify_token');
    fetch('https://api.spotify.com/v1/me/player/next', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  prevTrack() {
    const token = localStorage.getItem('spotify_token');
    fetch('https://api.spotify.com/v1/me/player/previous', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  getArtistNames(): string {
    if (!this.currentTrack || !this.currentTrack.artists) return '';
    return this.currentTrack.artists.map((a: any) => a.name).join(', ');
  }
}
