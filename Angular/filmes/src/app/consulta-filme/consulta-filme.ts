import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FilmeService } from '../filme-service';
import { SearchItem } from './filme';

@Component({
  selector: 'app-consulta-filme',
  imports: [CommonModule],
  templateUrl: './consulta-filme.html',
  styleUrl: './consulta-filme.css',
})
export class ConsultaFilme {
  #filmeService = inject(FilmeService)
  protected busca = signal('')
  protected filmes = signal<SearchItem[]>([])

  constructor() {
    this.buscarFilmes(this.busca())
  }

  atualizarBusca(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.busca.set(input.value);
  }

  buscarFilmes(titulo: string) {
    this.filmes.set([])

    this.#filmeService.buscarFilmes(titulo).subscribe(
      res => {
        if (res.Response === 'True' && res.Search) {
          this.filmes.set(res.Search)
        }
      }
    )
  }
}
