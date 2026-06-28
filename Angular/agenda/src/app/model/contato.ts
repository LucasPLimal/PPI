export enum TipoContato {
    AMIGO    = 'Amigo(a)',
    FAMILIA  = 'Família',
    IFRN     = 'IFRN',
    TRABALHO = 'Trabalho',
    OUTRO    = 'Outro'
}

export type Contato = {
    nome: string
    telefone: string
    email: string
    aniversario: Date
    tipo: TipoContato
}