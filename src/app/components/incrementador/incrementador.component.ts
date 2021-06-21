import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  progreso: number = 50;
  //getter para enviar el valor como lo nesesitamos
  get getPorcentaje() { // un get funciona com una variable
    //se imprikme directamente al html
    return`${this.progreso}%`;
  }
  cambiarValor( valor:number) {
    if(this.progreso >= 100 && valor >=0) {
      return this.progreso = 100;
    }
    if(this.progreso <= 0 && valor <0) {
      return this.progreso = 0;
    }
    return this.progreso = this.progreso + valor;

  }

  constructor() { }


}
