import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LojaService } from '../loja-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-detalhe',
  styleUrl: './produto-detalhe.css',
  templateUrl: './produto-detalhe.html',
  standalone: true,
  imports: [CommonModule],
})
export class ProdutoDetalhe implements OnInit {
  readonly #lojaService = inject(LojaService);
  readonly #route = inject(ActivatedRoute);

  produto: Produto | null = null;

  ngOnInit(): void {
    const id = Number(this.#route.snapshot.paramMap.get('id'));
    console.log('ID da rota:', id);

    if (id) {
      this.#lojaService.getProduto(id).subscribe({
        next: (produto) => {
          this.produto = produto;
          console.log('Produto:', produto);
        },
        error: (erro) => console.error('Erro ao buscar produto:', erro),
      });
    }
  }
}
