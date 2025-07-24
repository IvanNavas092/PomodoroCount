import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html'
})
export class CallbackComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const code = new URLSearchParams(window.location.search).get('code');
    const codeVerifier = localStorage.getItem('code_verifier');

    if (!code || !codeVerifier) {
      this.router.navigate(['/error']);
      return;
    }

    const body = new HttpParams()
      .set('client_id', '8a3f3c699a324421b023cd845ef8aa4a')
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', 'https://597e9fb4390e.ngrok-free.app/callback')
      .set('code_verifier', codeVerifier);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    this.http
      .post('https://accounts.spotify.com/api/token', body.toString(), { headers })
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('spotify_token', res.access_token);
          this.router.navigate(['/spotify']);
        },
        error: err => {
          console.error('Error al obtener el token', err);
          this.router.navigate(['/error']);
        }
      });
  }
}
