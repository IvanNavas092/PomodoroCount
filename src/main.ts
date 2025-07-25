import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// 👇 DEFINE el callback global ANTES de cargar Angular
(window as any).onSpotifyWebPlaybackSDKReady = () => {
  console.log('✅ Spotify SDK is ready (defined in main.ts)');
  // Aquí no hagas la inicialización del reproductor. Eso lo haces en el componente.
  // Solo define la función global para evitar errores si el script se carga antes.
};

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
