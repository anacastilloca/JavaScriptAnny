import { Component } from '@angular/core';

@Component({
  selector: 'js-raiz',
  
  template: "<h1>Hola</h1>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario:UsuarioInterface= {
    nombre:"Ana",
    apellido:"Castillo"
  }
  constructor(){
    console.log("Constructor");
    this.holaMundo();
    console.log(this.saludar(this.usuario.nombre,this.usuario.apellido))
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
