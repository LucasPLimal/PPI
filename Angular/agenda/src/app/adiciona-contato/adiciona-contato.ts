import { Component, inject } from '@angular/core';
import { AgendaService } from '../model/agenda-service';
import { Contato, TipoContato } from '../model/contato';

@Component({
  selector: 'app-adiciona-contatos',
  imports: [],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.css',
})
export class AdicionaContatos {
  #agendaService = inject(AgendaService)
  constructor() {
    this.adicionarContato()
  }
  adicionarContato() {
    let contato : Contato = {
       nome: 'Bruno',
       telefone: '849393928282',
       email: 'bruno.gurgel@ifrn.edu.br',
       aniversario: new Date (1982-1-16),
       tipo: TipoContato.AMIGO
    }

    let leonardo : Contato = {
       nome: 'Leonardo',
       telefone: '849393928282',
       email: 'leonardo@ifrn.edu.br',
       aniversario: new Date (1982-1-16),
       tipo: TipoContato.IFRN
    }

    this.#agendaService.adicionar(contato)
    this.#agendaService.adicionar(leonardo)
  }
}