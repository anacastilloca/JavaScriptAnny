import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css']
})
export class IniciComponent implements OnInit {
  nombre:string="Ana";
  constructor() { }

  ngOnInit() {
  }
  cambiarNombre():void{
    this.nombre="Andreaa"
  }
  cambiarOtroNombre(){
    this.nombre="Mariaa"
  }

  cambiarNombreInput(){
    
  }

}
