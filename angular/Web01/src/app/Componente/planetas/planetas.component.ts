import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  //planetas=[];
  planetas : PlanetaStarWars[] =[];

  constructor(private _http:Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO
  }

  ngOnInit() {
    //Esta listo el componente...Aqui se pone la logica del componente porque aqui ya
    // esta listo
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

          this.planetas=this.planetas.map(
            (planeta)=>{
              planeta.imagenUrl="assets/imagenes"+planeta.name+'.jpg';
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
  imagenUrl?:string;
}
