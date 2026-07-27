import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. Importações do PrimeNG no topo do arquivo
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PanelModule,
    DividerModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}