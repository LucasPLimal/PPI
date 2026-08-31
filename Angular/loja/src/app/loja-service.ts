import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({ providedIn: 'root' })
export class LojaService {
	readonly Url = 'http://localhost:3000';
    readonly #http = inject(HttpClient);

	getProdutos(): Observable<Produto[]> {
		return this.#http.get<Produto[]>(`${this.Url}/produtos`);
	}

	getProduto(id: number): Observable<Produto> {
		return this.#http.get<Produto>(`${this.Url}/produtos/${id}`);
	}
}
