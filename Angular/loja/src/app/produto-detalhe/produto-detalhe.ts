import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LojaService } from '../loja-service';
import { Produto } from '../produto';
import { CarrinhoService } from '../carrinho-service';

@Component({
  imports: [CommonModule],
  selector: 'app-produto-detalhe',
  styleUrl: './produto-detalhe.css',
  templateUrl: './produto-detalhe.html',
})
export class ProdutoDetalhe implements OnInit {
  id = input<number | null>(null);
  produto = signal<Produto | undefined>(undefined)

  readonly #lojaService = inject(LojaService)
  readonly #route = inject(ActivatedRoute)
  readonly #carrinhoService = inject(CarrinhoService)

  ngOnInit(): void {
    this.detalharProduto()
  }

  detalharProduto() {
    const produtoId = Number(this.id() ?? this.#route.snapshot.paramMap.get('id'))

    if (!produtoId || Number.isNaN(produtoId)) {
      this.produto.set(undefined)
      return
    }

    this.#lojaService.obterProdutoPorId(produtoId).subscribe({
      next: (prod) => this.produto.set(prod),
      error: () => this.produto.set(undefined),
    })
  }

  adicionarAoCarrinho() {
    const item = this.produto();
    if (!item) return;

    this.#carrinhoService.adicionarItem({
      id: item.id,
      produto: item,
      quantidade: 1,
    });
  }
}