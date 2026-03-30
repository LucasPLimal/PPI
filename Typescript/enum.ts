enum cursoV1 {
    INFO, MECA, SUBREDES, SUBMECA, TSI
}

//enum: Relacioner um valor de constante ao texto daquela constante
enum curso {
    INFO = "Integado em Informática",
    MECA = "Integrado em Mecatrônica",
    SUBREDES = "Subsequente em Redes",
    SUBMECA = "Subsequente em Mecatrônica",
    TSI = "Superior de tecnologia em Sistemas para Internet"
}

console.log(curso.INFO)


//Type: definir valores contantes relacionados de forma simples
type DisciplinasTecnicas = 'TSI' | 'PDS' | 'SOR'

interface Turma {
    cod: number,
    nome: string,
    curso: curso,
    disciplinastecnicas: DisciplinasTecnicas
}

const ppi: Turma = {
    cod: 2026,
    nome: 'Programação para internet',
    curso: curso.INFO,
    disciplinastecnicas: 'TSI'
}

