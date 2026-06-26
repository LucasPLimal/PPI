import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  #contatos: Contato[]
  #filtrarFavoritos = false

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

  obterFavoritos(): Contato[] {
    return this.obterTodos().filter((c) => c.favorito)
  }

  alternarFiltroFavoritos(): void {
    this.#filtrarFavoritos = !this.#filtrarFavoritos
  }

  estaFiltrandoFavoritos(): boolean {
    return this.#filtrarFavoritos
  }

  obterVisiveis(): Contato[] {
    return this.#filtrarFavoritos ? this.obterFavoritos() : this.obterTodos()
  }

  favoritar(c: Contato): boolean {
    if (!c) return false
    const idx = this.#contatos.findIndex((ct) => ct.email === c.email)
  
    if (idx === -1) return false
    this.#contatos[idx].favorito = true
    return true
  }

  desfavoritar(c: Contato): boolean {
    if (!c) return false
    const idx = this.#contatos.findIndex((ct) => ct.email === c.email)

    if (idx === -1) return false
    this.#contatos[idx].favorito = false
    return true
  }
}