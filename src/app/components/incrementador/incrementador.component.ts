import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  constructor() { }

 @Input() progreso: number = 5; 
 @Input() btnClase: string = 'btn btn-primary';

 @Output() valorSalida: EventEmitter<number> = new EventEmitter();
 
cambiarValor( valor: number ) {
  
  this.progreso += valor;
  if ( this.progreso < 0 ) {
    this.progreso = 0;
  }
  if ( this.progreso > 100 ) {
    this.progreso = 100;
  }

  this.valorSalida.emit( this.progreso );
}

onChange( nuevoValor: number ){
  
  if( nuevoValor >= 100){
    this.progreso = 100;
  } else if( nuevoValor <= 0){
    this.progreso = 0;
  } else {
    this.progreso = nuevoValor;
  }

  this.valorSalida.emit( this.progreso );
}

}
