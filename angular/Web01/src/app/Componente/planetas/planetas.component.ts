import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {
  nombre: string = "Ana";

  //planetas=[];
  planetas : PlanetaStarWars[] =[];

  arregloUsuarios = [{
    nombre: "Ana",
    apellido: "Castillo",
    conectado: true
  }, {
    nombre: "Pedro",
    apellido: "Maldonado",
    conectado: true
  }, {
    nombre: "Jhon",
    apellido: "Rodriguez",
    conectado: false
  }, {
    nombre: "jUAN",
    apellido: "Maldonado",
    conectado: true
  }];

  constructor(private _http:Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO
  }

  ngOnInit() {
    //Esta listo el componente...Aqui se pone la logica del componente porque aqui ya
    // esta listo
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
  cargarPlanetas(){
    this._http.get("http://swapi.co/api/planets")
    //.map(response=>response.json())
      .subscribe(
        //funciones anonimas http://swapi.co/api/planets/?page=2
        (response)=>{
          console.log("Response: ",response);
          console.log(response.json());
          let respuesta=response.json();
          console.log("Holaa",respuesta.next);
          this.planetas=respuesta.results;
        },
        (error)=>{
          console.log("Error: ",error);
        },
        ()=>{
          console.log("Finally");
        }
      )
  }
}

interface PlanetaStarWars{
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}
