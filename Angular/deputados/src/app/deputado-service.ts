import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeputadoResponse } from './Deputado';

@Service()
export class DeputadoService {
    readonly API = 'https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome';
    readonly #http = inject(HttpClient);

    obterTodos(): Observable<DeputadoResponse> {
        return this.#http.get<DeputadoResponse>(`${this.API}/deputados?ordem=ASC&ordenarPor=nome`);
    }
}
