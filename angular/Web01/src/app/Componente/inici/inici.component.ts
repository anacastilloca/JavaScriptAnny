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
  usuarios: UsuarioClass[] = [];
  nuevoUsuario: UsuarioClass = new UsuarioClass("");
  planetas: PlanetaStarWarsInterface[] = [];
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

  constructor(private _http: Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO
  }

  ngOnInit() {
    //Esta listo el componente...Aqui se pone la logica del componente porque aqui ya
    // esta listo
    this._http.get("http://localhost:1337/Usuario/")
      .subscribe(respuesta => {
          let rjson: UsuarioClass[] = respuesta.json();

          this.usuarios = rjson.map(
            (usuario: UsuarioClass) => {
              //Cambiar usuario
              usuario.editar = false;
              return usuario;
            }
          );

          console.log("Usuarios: ", this.usuarios);
        },
        error => {
          console.log("Error: ", error);
        }
      )
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

  cargarPlanetas() {
    this._http.get("http://swapi.co/api/planets")
    //.map(response=>response.json())
      .subscribe(
        //funciones anonimas http://swapi.co/api/planets/?page=2
        (response) => {
          console.log("Response: ", response);
          console.log(response.json());
          let respuesta = response.json();
          console.log(respuesta.next);
          this.planetas = respuesta.results;

          this.planetas = this.planetas.map(
            (planeta) => {
              planeta.imagenUrl = "assets/Imagenes/" + planeta.name + '.jpg';
              return planeta;
            }
          )
        },
        (error) => {
          console.log("Error: ", error);
        },
        () => {
          console.log("Finally");
        }
      )
  }

  crearUsuario() {

    console.log("Entro a crear un Usuario");
    console.log(this.nuevoUsuario)
    /*
     let usuario={
     nombre:this.nuevoUsuario.nombre
     }*/
    /*this._http.post("http://localhost:1337/Usuario", this.nuevoUsuario)
      .subscribe(respuesta => {
          let respuestaJson = respuesta.json();
          this.usuarios.push(respuestaJson);
          this.nuevoUsuario = new UsuarioClass();
          console.log('respuestaJson: ', respuestaJson);
        },
        error => {
          console.log("Error ", error)
        }
      )*/
  }

  //Este metodo se ejecuta con un evento del componente hijo
  // (usuarioborrado)="eliminarUsuario($event"
  eliminarUsuarioI(usuario: UsuarioClass) {
    let indice = this.usuarios.indexOf(usuario);
    //Eliminando del arreglo (Frontend)
    this.usuarios.splice(indice, 1);

  }


}


