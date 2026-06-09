import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contato, ContatoTipo } from './contato';

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './adiciona-contato.html',
  styleUrls: ['./adiciona-contato.css'],
})
export class AdicionaContato {
  private fb = inject(FormBuilder);
  protected readonly tipos = Object.values(ContatoTipo);
  protected readonly contatoForm = this.fb.group({
    nome: ['', Validators.required],
    telefone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    aniversario: ['', Validators.required],
    tipo: [ContatoTipo.Amigo, Validators.required],
  });

  protected contatos: Contato[] = [];

  constructor() {}

  protected adicionarContato(): void {
    if (this.contatoForm.invalid) {
      this.contatoForm.markAllAsTouched();
      return;
    }

    const { nome, telefone, email, aniversario, tipo } = this.contatoForm.value;

    this.contatos.push(
      new Contato(
        nome as string,
        telefone as string,
        email as string,
        aniversario as string,
        tipo as ContatoTipo,
      ),
    );

    this.contatoForm.reset({ tipo: ContatoTipo.Amigo });
  }
}

