import { Injectable } from '@angular/core';
import { Contato, TipoContato } from './contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  #contatos: Contato[]
  #tipoFiltro: TipoContato | null = null

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

  definirFiltroTipo(tipo: TipoContato | null): void {
    this.#tipoFiltro = tipo
  }

  obterTipoFiltro(): TipoContato | null {
    return this.#tipoFiltro
  }

  obterVisiveis(): Contato[] {
    let visiveis = this.obterTodos()

    if (this.#tipoFiltro) {
      visiveis = visiveis.filter((c) => c.tipo === this.#tipoFiltro)
    }

    return visiveis
  }
}