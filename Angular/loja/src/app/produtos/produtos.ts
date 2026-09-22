import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LojaService } from '../loja-service';
import { Produto } from '../produto';
import { CarrinhoService } from '../carrinho-service';

@Component({
	imports: [CommonModule, RouterModule],
	selector: 'app-produtos',
	styleUrl: './produtos.css',
	templateUrl: './produtos.html',
})
export class Produtos implements OnInit {
	produtos = signal<Produto[]>([])
	loading = signal<boolean>(true)
	error = signal<string | null>(null)
	readonly quantidadeTotal = computed(() => this.#carrinhoService.quantidadeTotal());
  	readonly totalCompra = computed(() => this.#carrinhoService.total());
	readonly #lojaService = inject(LojaService)
	readonly #carrinhoService = inject(CarrinhoService)
	readonly aberto = signal(false);

	toggleCarrinho() {
    this.aberto.update(v => !v);
    }

	ngOnInit(): void {
		this.loadProdutos()
	}

	loadProdutos() {
		this.loading.set(true)
		this.error.set(null)
		this.#lojaService.obterProdutos().subscribe({
			next: (p) => {
				this.produtos.set(p)
				this.loading.set(false)
			},
			error: (err) => {
				console.error(err)
				this.error.set('Erro ao carregar produtos. Verifique a API.')
				this.loading.set(false)
			}
		})
	}
}

