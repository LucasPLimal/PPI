import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdicionaContato } from './adiciona-contato/adiciona-contato';
import { ExibeContatos } from './exibe-contatos/exibe-contatos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdicionaContato, ExibeContatos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('agenda');
}
