import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  private res: string = '0';
  private arrayContas: Array<string> = [];
  constructor(private calculadoraService: CalculadoraService) {}

  ngOnInit(): void {}
  concat(concatena: string) {
    this.res = this.res === '0' ? concatena : this.res + concatena;
    this.arrayContas.push(concatena);
  }
  get resultado(): string {
    return this.res;
  }

  limpar() {
    this.res = '0';
    this.arrayContas = [''];
  }

  calcular() {
    let m = this.calculadoraService.calcular(this.arrayContas);
    this.res = m.toString();
  }
}
