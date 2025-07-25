import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './Components/spotify/callback/callback.component';
import { ErrorComponent } from './Components/spotify/error/error.component';
import { AllComponent } from './Sections/all/all.component';
import { PlayerMusicComponent } from './Components/spotify/player-music/player-music.component';
const routes: Routes = [
  { path: '', component: AllComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'spotify', component: PlayerMusicComponent }
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
