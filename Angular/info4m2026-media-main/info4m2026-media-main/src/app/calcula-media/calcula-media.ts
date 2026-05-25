import { Component } from '@angular/core';


@Component({
  selector: 'app-calcula-media',
  imports: [],
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.scss',
})
export class CalculaMedia {
  mediaParcial: number | undefined
  mediaFinal: number | undefined
  situacao: string | undefined


  constructor() {
    this.mediaParcial = undefined
    this.mediaFinal = undefined
    this.situacao = undefined
  }




  calcularMediaParcial(b1: number, b2: number,
                       b3: number, b4: number) {
      this.mediaParcial =
        (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10
      this.mediaFinal = undefined
      this.situacao = undefined
  }


  calcularMediaFinal(notaAvFinal: number) {
    if (this.mediaParcial == undefined) {
      return
    }
    this.mediaFinal = (this.mediaParcial + notaAvFinal) / 2
    this.situacao = (this.mediaFinal >= 60) ? 'Aprovado' : 'Reprovado'
  }
}
