let hoje = new Date();
hoje.getTime();

let data_f = new Date('2025-1-1');
data_f.getTime();

let dif = hoje.getTime() - data_f.getTime();
let dias = dif / (1000 * 60 * 60 * 24);
console.log(Math.floor(dias));