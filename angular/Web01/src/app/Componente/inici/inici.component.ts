import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {PlanetaStarWarsInterface} from "../../Interfaces/PlanetaStarWars";
import {UsuarioClass} from "../../Clases/UsuarioClass";

@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css']
})
export class IniciComponent implements OnInit {
  nombre: string = "Ana";
  usuarios: UsuarioClass[]= [];
  nuevoUsuario:UsuarioClass= new UsuarioClass("");
  planetas: PlanetaStarWarsInterface[]=[];
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
    this._http.get("http://localhost:1337/Usuario")
      .subscribe(respuesta=>{
          let rjson:UsuarioClass[]=respuesta.json();
          this.usuarios=rjson;
          console.log("Usuarios: ",this.usuarios);
        },
        error=>{
          console.log("Error: ",error);
        }
      )
    console.log('Nuevo Usuario: ',this.nuevoUsuario)
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

  crearUsuario(){
    /*
    let usuario={
      nombre:this.nuevoUsuario.nombre
    }*/
    this._http.post("http://localhost:1337/Usuario",this.nuevoUsuario)
      .subscribe(respuesta=>{
          let respuestaJson=respuesta.json();
          console.log('respuestaJson: ',respuestaJson);
          this.usuarios.push(respuestaJson)
        },
        error=>{
        console.log("Error ", error)
        }
      )
  }

  eliminarUsuario(usuario: UsuarioClass, indice: number) {

    console.log("Indice:", this.usuarios.indexOf(usuario));
    console.log("Indice con index: ", indice);
    console.log("Usuarios : ", this.usuarios);
    console.log("Usuariofff : ", usuario.id);
    this.usuarios.splice(indice,1);

    this._http.delete("http://localhost:1337/Usuario?id="+usuario.id)
      .subscribe(respuesta=>{
          let respuestaJson=respuesta.json();
          console.log('respuestaJsonoooooo: ',respuestaJson);
        },
        error=>{
          console.log("Error ", error)
        }
      )

  }
}


