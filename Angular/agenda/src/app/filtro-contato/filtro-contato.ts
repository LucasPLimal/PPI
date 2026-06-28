import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaService } from '../model/agenda-service';
import { TipoContato } from '../model/contato';

@Component({
  selector: 'app-filtro-contato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filtro-contato.html',
  styleUrl: './filtro-contato.css',
})
export class FiltroContato {
  #agendaService = inject(AgendaService);
  protected readonly tiposContato = Object.values(TipoContato);

  protected get tipoSelecionado(): TipoContato | null {
    return this.#agendaService.obterTipoFiltro();
  }

  protected selecionarTipo(tipo: TipoContato | null): void {
    this.#agendaService.definirFiltroTipo(tipo);
  }
}