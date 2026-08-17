import { Component, signal } from '@angular/core';
import { inject } from '@angular/core';
import { DeputadoService } from '../deputado-service';
import { Deputado } from '../Deputado';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-consulta-deputados',
  imports: [ReactiveFormsModule],
  templateUrl: './consulta-deputados.html',
  styleUrls: ['./consulta-deputados.css'],
})
export class ConsultaDeputados {
  readonly #deputadoService = inject(DeputadoService);
  protected deputados = 
  signal<Deputado[]>([]);

  protected form = new FormGroup({
    tipo: new FormControl<'nome' | 'partido' | 'uf'>('nome' as 'nome' | 'partido' | 'uf', { nonNullable: true }),
    nome: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
  });

  constructor() {
    this.#deputadoService.obterTodos().subscribe((res) => {
      this.deputados.set(res.dados);
    });
    // inicializa com lista de todos
    // ajusta validadores quando o tipo de filtro muda
    this.form.get('tipo')?.valueChanges.subscribe((t) => {
      const ctrl = this.form.get('nome');
      if (!ctrl) return;
      if (t === 'partido') {
        ctrl.setValidators([Validators.required, Validators.minLength(2)]);
      } else if (t === 'uf') {
        ctrl.setValidators([Validators.required, Validators.pattern(/^[A-Za-z]{2}$/), Validators.minLength(2), Validators.maxLength(2)]);
      } else {
        ctrl.setValidators([Validators.required]);
      }
      ctrl.updateValueAndValidity();
    });
  }

  filtrar() {
    const tipo = this.form.get('tipo')?.value;
    const valor = this.form.get('nome')?.value?.toString().trim();

    if (!valor) {
      this.#deputadoService.obterTodos().subscribe((res) => {
        this.deputados.set(res.dados);
      });
      return;
    }

    if (tipo === 'nome') {
      this.#deputadoService.obterPorNome(valor).subscribe((res) => {
        this.deputados.set(res.dados);
      });
    } else if (tipo === 'partido') {
      this.#deputadoService.obterPorPartido(valor).subscribe((res) => {
        this.deputados.set(res.dados);
      });
    } else if (tipo === 'uf') {
      this.#deputadoService.obterPorUf(valor).subscribe((res) => {
        this.deputados.set(res.dados);
      });
    }
  }
}
