import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsuarioClass} from "../../Clases/UsuarioClass";
import {Http} from "@angular/http";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @Input() usuarioC:UsuarioClass;
  @Output() usuarioborrado = new EventEmitter();

  constructor(private _http:Http) { }

  ngOnInit() {
    console.log("Usuario local", this.usuarioC)

  }

  eliminarUsuario(usuario: UsuarioClass, indice: number) {

    this._http.delete("http://localhost:1337/Usuario/"+usuario.id)
      .subscribe(respuesta=>{

          this.usuarioborrado.emit(usuario);
          //this.usuarios.splice(this.usuarios.indexOf(usuario),1)

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

        this.usuarioC.nombre = nombre
        this.usuarioC.editar = !this.usuarioC.editar;

       // let indice = this.usuarios.indexOf(usuario);
        //this.usuarios[indice].nombre = nombre;
        //this.usuarios[indice].editar = !this.usuarios[indice].editar;
      },
      err =>{
        //Hubo algun problema (Red servidor)
        console.log("Hubo un error", err)
      }
    );
  }

}
