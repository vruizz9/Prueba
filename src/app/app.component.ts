import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario';

  datos = [{
    IdPersona: 1,
    Documento: "sample string 2",
    Nombres: "sample string 3",
    Apellidos: "sample string 4",
    Telefono: "sample string 5",
    Correo: "sample string 6",
    Direccion: "sample string 7",
  }]
  
  posts = [];
  errors = [];

  

}
