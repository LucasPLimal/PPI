import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExibeMensagem } from './exibe-mensagem/exibe-mensagem';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExibeMensagem],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('primeiro-app');
}
