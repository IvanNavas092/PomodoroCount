import { Component } from '@angular/core';
import { AuthSpotifyService } from './Services/auth-spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PomodoroCount';
  isLoggedIn: boolean = false;
  constructor(private authService: AuthSpotifyService) {}

  ngOnInit(): void {
    console.log(this.authService.checkToken());
    this.authService.isLoggedIn$.subscribe(data => {
      this.isLoggedIn = data;
      console.log(data);
    });
  }
}
