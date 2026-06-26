import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaService } from '../model/agenda-service';

@Component({
  selector: 'app-filtro-contato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filtro-contato.html',
  styleUrl: './filtro-contato.css',
})
export class FiltroContato {
  #agendaService = inject(AgendaService);

  protected get filtroAtivo(): boolean {
    return this.#agendaService.estaFiltrandoFavoritos();
  }

  protected alternarFiltro(): void {
    this.#agendaService.alternarFiltroFavoritos();
  }
}