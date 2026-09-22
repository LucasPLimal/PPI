import { Routes } from '@angular/router';
import { Produtos } from './produtos/produtos';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { Carrinho } from './carrinho/carrinho';

export const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: Produtos },
  { path: 'carrinho', component: Carrinho },
  { path: 'produtos/:id', component: ProdutoDetalhe },
];
