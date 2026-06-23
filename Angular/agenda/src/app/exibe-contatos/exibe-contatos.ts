import { Component, inject } from '@angular/core';
import { AgendaService } from '../model/agenda-service';
import { Contato } from '../model/contato';

@Component({
  selector: 'app-exibe-contatos',
  imports: [],
  templateUrl: './exibe-contatos.html',
  styleUrl: './exibe-contatos.scss',
})
export class ExibeContatos {
    #agendaService = inject(AgendaService)
    protected readonly contatos: Contato[] = []

    constructor() {
      this.contatos = this.#agendaService.obterTodos()
    }
}