import { Component } from '@angular/core';
import {TokenService} from "./token.service";

@Component({
  selector: 'js-raiz',
  templateUrl: './app.component.html',
  //template: "<h1>Hola</h1>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario:UsuarioInterface= {
    nombre:"",
    apellido:"Castillo"
  }
  //Para probar bind- va a constructor
  parrafo:string="";
  background:string="green";
  //Metodo para app.component.html
  url:string="https://angular.io";

  constructor(private  _TokenService:TokenService){
    this._TokenService.token="Busca tu Constructor Lili";

    this.usuario.nombre="Ana";
    this.parrafo="Para usar el bind";
    setTimeout(()=>{
      this.usuario.nombre="Alejandra"
    },3000)
    //console.log("Constructor");
    //this.holaMundo();
    //console.log(this.saludar(this.usuario.nombre,this.usuario.apellido))
  }
  holaMundo(){
    console.log("Hola mundosss");
  }
  saludar(nombre:string,apellido?:string){
    return `Hola ${nombre} ${apellido}`;
  }

}
interface UsuarioInterface{
  nombre:string,
  apellido:string
}
