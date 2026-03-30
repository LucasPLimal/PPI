"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cursoV1;
(function (cursoV1) {
    cursoV1[cursoV1["INFO"] = 0] = "INFO";
    cursoV1[cursoV1["MECA"] = 1] = "MECA";
    cursoV1[cursoV1["SUBREDES"] = 2] = "SUBREDES";
    cursoV1[cursoV1["SUBMECA"] = 3] = "SUBMECA";
    cursoV1[cursoV1["TSI"] = 4] = "TSI";
})(cursoV1 || (cursoV1 = {}));
//enum: Relacioner um valor de constante ao texto daquela constante
var curso;
(function (curso) {
    curso["INFO"] = "Integado em Inform\u00E1tica";
    curso["MECA"] = "Integrado em Mecatr\u00F4nica";
    curso["SUBREDES"] = "Subsequente em Redes";
    curso["SUBMECA"] = "Subsequente em Mecatr\u00F4nica";
    curso["TSI"] = "Superior de tecnologia em Sistemas para Internet";
})(curso || (curso = {}));
console.log(curso.INFO);
const ppi = {
    cod: 2026,
    nome: 'Programação para internet',
    curso: curso.INFO,
    disciplinastecnicas: 'TSI'
};
//# sourceMappingURL=enum.js.map