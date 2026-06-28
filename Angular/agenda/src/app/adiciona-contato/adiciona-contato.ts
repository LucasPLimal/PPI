import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AgendaService } from '../model/agenda-service';
import { Contato, TipoContato } from '../model/contato';

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adiciona-contato.html',
  styleUrls: ['./adiciona-contato.css'],
})
export class AdicionaContato {
  #agendaService = inject(AgendaService);
  #fb = inject(FormBuilder);

  protected contatoForm = this.#fb.group({
    nome: ['', Validators.required],
    telefone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    aniversario: ['', Validators.required],
    tipo: [TipoContato.AMIGO, Validators.required],
  });

  protected tipos = Object.values(TipoContato);

  protected adicionarContato(): void {
    if (this.contatoForm.invalid) {
      this.contatoForm.markAllAsTouched();
      return;
    }

    const { nome, telefone, email, aniversario, tipo } = this.contatoForm.value;

    const contato: Contato = {
      nome: nome as string,
      telefone: telefone as string,
      email: email as string,
      aniversario: new Date(aniversario as string),
      tipo: tipo as TipoContato,
    };

    this.#agendaService.adicionar(contato);
    this.contatoForm.reset({ tipo: TipoContato.AMIGO });
  }
}