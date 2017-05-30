import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css']
})
export class IniciComponent implements OnInit {
  nombre: string = "Ana";
  arregloUsuarios = [{
    nombre: "Ana",
    apellido: "Castillo"
  }, {
    nombre: "Pedro",
    apellido: "Maldonado"
  }, {
    nombre: "Jhon",
    apellido: "Rodriguez"
  }];

  constructor() {
  }

  ngOnInit() {
  }

  cambiarNombre(): void {
    this.nombre = "Andreaa"
  }

  cambiarOtroNombre() {
    this.nombre = "Mariaa"
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);
    this.nombre = nombreEtiqueta.value
  }

}
