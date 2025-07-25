import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthSpotifyService {
  private clientId = environment.spotify.CLIENT_ID;
  private redirectUri = environment.spotify.REDIRECT_URI;
  private scopes = environment.spotify.SCOPES;

  isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  async loginWithSpotify(): Promise<void> {
    const codeVerifier = this.generateRandomString(64);
    const codeChallenge = await this.generateCodeChallenge(codeVerifier);

    localStorage.setItem('code_verifier', codeVerifier);

    const authUrl =
      'https://accounts.spotify.com/authorize?' +
      new URLSearchParams({
        client_id: this.clientId,
        response_type: 'code',
        redirect_uri: this.redirectUri,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
        scope: this.scopes.join(' ')
      }).toString();

    window.location.href = authUrl;
  }

  private generateRandomString(length: number): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
  }

  private async generateCodeChallenge(codeVerifier: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  checkToken() {
    const token = localStorage.getItem('access_token');
    this.isLoggedIn.next(!!token);
  }
}
