import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  titulo="LLamado Variable interpolacion"
  variableInput =""

  numero1:number = 0;
  numero2:number = 0;
  resultado:number = 0; 

  cambiarTitulo(tituloNuevo: any){
    this.titulo = tituloNuevo;
  }
  sumar(){
    this.resultado=this.numero1+this.numero2;
  }
}
