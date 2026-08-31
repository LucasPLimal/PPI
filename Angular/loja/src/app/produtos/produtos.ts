import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaService } from '../loja-service';
import { Produto } from '../produto';

@Component({
  imports: [CommonModule],
  selector: 'app-produtos',
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',
})
export class Produtos implements OnInit {
  produtos: Produto[] = [];
  readonly #lojaService = inject(LojaService);

  ngOnInit(): void {
    this.#lojaService.getProdutos().subscribe({
      next: (dados) => {
        this.produtos = dados;
      },
      error: (erro) => {
        console.error('Erro ao buscar produtos:', erro);
      }
    });
  }
}
