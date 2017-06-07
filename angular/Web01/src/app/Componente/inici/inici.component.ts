import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {PlanetaStarWarsInterface} from "../../Interfaces/PlanetaStarWars";

@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css']
})
export class IniciComponent implements OnInit {
  nombre: string = "Ana";

  planetas=[];
 // planetas:PlanetaStarWarsInterface[]=[];

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
        console.log(respuesta.next);
        this.planetas=respuesta.results;

        this.planetas=this.planetas.map(
          (planeta)=>{
            planeta.imagenUrl = "assets/Imagenes/"+planeta.name+'.jpg';
            return planeta;
          }
        )
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

