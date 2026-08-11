import { Component, signal } from '@angular/core';
import { inject } from '@angular/core';
import { DeputadoService } from '../deputado-service';
import { Deputado } from '../Deputado';


@Component({
  selector: 'app-consulta-deputados',
  imports: [],
  templateUrl: './consulta-deputados.html',
  styleUrls: ['./consulta-deputados.css'],
})
export class ConsultaDeputados {
  readonly #deputadoService = inject(DeputadoService);
  protected deputados = 
  signal<Deputado[]>([]);

  constructor() {
    this.#deputadoService.obterTodos().subscribe((res) => {
      this.deputados.set(res.dados);
    });
    // inicializa com lista de todos
  }

  filtrar(nome: string) {
    this.#deputadoService.obterPorNome(nome).subscribe((res) => {
      this.deputados.set(res.dados);
    });
  }
}
