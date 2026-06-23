import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaService } from '../model/agenda-service';
import { Contato } from '../model/contato';

@Component({
  selector: 'app-exibe-contatos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exibe-contatos.html',
  styleUrls: ['./exibe-contatos.css'],
})
export class ExibeContatos {
  #agendaService = inject(AgendaService);

  protected get contatos(): Contato[] {
    return this.#agendaService.obterTodos();
  }

  protected trackByEmail(_index: number, item: Contato) {
    return item.email;
  }

  protected removerContato(c: Contato): void {
    this.#agendaService.remover(c);
  }

  protected favoritar(c: Contato): void {
    if (c.favorito) {
      this.#agendaService.desfavoritar(c);
    } else {
      this.#agendaService.favoritar(c);
    }
  }
}