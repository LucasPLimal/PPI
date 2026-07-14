import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SearchResponse } from './consulta-filme/filme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  readonly API_URL = 'https://www.omdbapi.com/?apikey=15dc2ff8'
  #http = inject(HttpClient)

  buscarFilmes(titulo: string): Observable<SearchResponse> {
    return this.#http.get<SearchResponse>(`${this.API_URL}&s=${titulo}`)
  }
}
