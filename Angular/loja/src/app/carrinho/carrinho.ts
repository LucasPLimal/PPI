import { Component, computed, inject } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';

@Component({
  imports: [],
  selector: 'app-carrinho',
  styleUrl: './carrinho.css',
  templateUrl: './carrinho.html',
})
export class Carrinho {
  readonly #carrinhoService = inject(CarrinhoService);
  readonly quantidadeTotal = computed(() => this.#carrinhoService.quantidadeTotal());
}
