const contatos = ['alvaro', 'gabi', 'erika', 'lelet', 
                  'sarpa', 'jonatas']

let contador = 0

let buscado = 'erika'
let encontrado = false


/*
while (contador < contatos.length && !encontrado) {
    if (buscado === contatos[contador]) {
        encontrado = true
    }

    contador ++

}
console.log(encontrado)
*/

const p = contatos.find(pessoa => pessoa === buscado)
if (p) {
    console.log(true)
} else {
    console.log(false)
}