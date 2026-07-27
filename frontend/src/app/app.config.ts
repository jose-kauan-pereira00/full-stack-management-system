import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';

// Configurações do PrimeNG 18+
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura'; // Temas disponíveis: Aura, Lara, Nora, Material

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    
    provideAnimationsAsync(),
    
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'system' // Opções: 'system', 'none', ou uma classe personalizada como '.my-app-dark'
        }
      }
    })
  ]
};