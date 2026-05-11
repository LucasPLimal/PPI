let renda_familia: number;
let n_filhos: number;
let qnt_familias = 0;
let conjunto_renda = []
let conjunto_filhos = []

do {
let add_renda = prompt("digita a renda da sua familia: ")
renda_familia = Number(add_renda)
let add_filhos = prompt("qunatos filhos sua familia tem: ")
n_filhos = Number(add_filhos)

if (renda_familia == -1) {
    break
}

} while (true) {
    conjunto_filhos.push(renda_familia)
    conjunto_renda.push(n_filhos)
    qnt_familias ++
}

let soma_renda: number = conjunto_renda.reduce(())
let soma_filhos: number = conjunto_filhos.reduce(())


let media_renda = soma_renda/qnt_familias
let media_filhos = soma_filhos/qnt_familias

console.log("a media familiar é: " , media_renda)
console.log("número de filhos é: " , media_filhos)

