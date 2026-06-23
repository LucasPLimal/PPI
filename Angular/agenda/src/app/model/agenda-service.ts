import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  #contatos: Contato[]

  constructor() {
    this.#contatos = []
  }

  existe(c: Contato): boolean {
    if (!c) return false
    return this.#contatos.some((ct) => ct.email === c.email)
  }

  adicionar(c: Contato): boolean {
    if (!c) return false
    if (this.existe(c)) return false
    this.#contatos.push(c)
    return true
  }

  remover(c: Contato): boolean {
    if (!c) return false
    const idx = this.#contatos.findIndex((ct) => ct.email === c.email)
    if (idx === -1) return false
    this.#contatos.splice(idx, 1)
    return true
  }

  obterTodos(): Contato[] {
    return [...this.#contatos]
  }

}