export enum ContatoTipo {
  Amigo = 'Amigo(a)',
  Familia = 'Família',
  Trabalho = 'Trabalho',
  Outro = 'Outro',
}

export class Contato {
  constructor(
    private _nome: string,
    private _telefone: string,
    private _email: string,
    private _aniversario: string,
    private _tipo: ContatoTipo,
  ) {}

  get nome(): string {
    return this._nome;
  }
  set nome(value: string) {
    this._nome = value;
  }

  get telefone(): string {
    return this._telefone;
  }
  set telefone(value: string) {
    this._telefone = value;
  }

  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }

  get aniversario(): string {
    return this._aniversario;
  }
  set aniversario(value: string) {
    this._aniversario = value;
  }

  get tipo(): ContatoTipo {
    return this._tipo;
  }
  set tipo(value: ContatoTipo) {
    this._tipo = value;
  }
}
