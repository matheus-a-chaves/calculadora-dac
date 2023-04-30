import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  private simbolo: string = '0';
  constructor() {}
  calcular(arrayCalculo: Array<string>): number {
    const resultado: string[] = [];

    let numeroAtual: string = '';

    for (const elemento of arrayCalculo) {
      if (isNaN(parseInt(elemento, 10))) {
        resultado.push(numeroAtual);
        resultado.push(elemento);
        numeroAtual = '';
      } else {
        numeroAtual += elemento;
      }
    }
    resultado.push(numeroAtual);

    const resultadoNumber = this.calcularExpressao(resultado);
    return resultadoNumber;
  }

  verificaOperacao(simbolo: any): boolean {
    if (
      simbolo == '-' ||
      simbolo == '/' ||
      simbolo == '+' ||
      simbolo == 'x' ||
      simbolo == '%' ||
      simbolo == '^'
    ) {
      return true;
    }

    return false;
  }

  calcularExpressao(array: Array<string>): number {
    const expressao: string = array.join('');
    return eval(expressao);
  }
}
