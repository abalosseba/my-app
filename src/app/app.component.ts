import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  titulo="LLamado Variable interpolacion"

  cambiarTitulo(tituloNuevo: any){
    this.titulo = tituloNuevo;
  }
}
