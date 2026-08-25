import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Loja } from '../loja';

@Component({
  imports: [CommonModule],
  selector: 'app-produtos',
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',
})
export class Produtos {
  produtos: any[] = [];

  constructor(private loja: Loja) {
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.loja.getProdutos().subscribe({
      next: (res) => (this.produtos = res),
    });
  }
}