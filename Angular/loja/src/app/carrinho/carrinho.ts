import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../carrinho-service';
import { Item } from '../item';

@Component({
  imports: [CommonModule],
  selector: 'app-carrinho',
  styleUrl: './carrinho.css',
  templateUrl: './carrinho.html',
})
export class Carrinho {
  readonly #carrinhoService = inject(CarrinhoService);
  readonly itens = this.#carrinhoService.itens;
  readonly quantidadeTotal = computed(() => this.#carrinhoService.quantidadeTotal());
  readonly totalCompra = computed(() => this.#carrinhoService.total());
  readonly aberto = signal(false);

  toggleCarrinho() {
    this.aberto.update(v => !v);
  }

  aumentar(item: Item) {
    this.#carrinhoService.aumentarQuantidade(item);
  }

  diminuir(item: Item) {
    this.#carrinhoService.diminuirQuantidade(item);
  }

  remover(item: Item) {
    this.#carrinhoService.removerItem(item);
  }
}
