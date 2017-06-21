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

          this.usuarios=rjson.map(
            (usuario:UsuarioClass)=>{
              //Cambiar usuario
              usuario.editar=false;
              return usuario;
            }
          );

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
          this.usuarios.push(respuestaJson);
          this.nuevoUsuario = new UsuarioClass();
          console.log('respuestaJson: ',respuestaJson);
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
    console.log("Usuariofff : ", this.usuarios.indexOf(usuario));

    this._http.delete("http://localhost:1337/Usuario/"+usuario.id)
      .subscribe(respuesta=>{
          this.usuarios.splice(this.usuarios.indexOf(usuario),1)

        },
        error=>{
          console.log("Error ", error)
        }
      )

  }

  actualizarUsuario(usuario:UsuarioClass, nombre:string){
    let actualizacion={
      nombre:nombre
    };
    this._http.put("http://localhost:1337/Usuario/"+usuario.id,actualizacion).map(
      (res)=>{
        return res.json();
        //snippet template de codigo para reutilizarlo DEBER
      }).subscribe(
        res=>{
          //el servidor nos dice que se actualizo
          console.log("El usuario se actualizo",res);

          let indice = this.usuarios.indexOf(usuario);
          this.usuarios[indice].nombre = nombre;
          this.usuarios[indice].editar = !this.usuarios[indice].editar;
        },
      err =>{
          //Hubo algun problema (Red servidor)
        console.log("Hubo un error", err)
      }
    );
  }
}


