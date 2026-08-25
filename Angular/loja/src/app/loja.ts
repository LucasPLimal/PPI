import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class Loja {
	readonly Url = 'http://localhost:3000';
    readonly #http = inject(HttpClient);

	getProdutos(): Observable<any[]> {
		return this.#http.get<any[]>(`${this.Url}/produtos`);
	}

	getProduto(id: number): Observable<any> {
		return this.#http.get<any>(`${this.Url}/produtos/:${id}`);
	}
}
