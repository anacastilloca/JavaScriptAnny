import {Component, Input, OnInit} from '@angular/core';
import {UsuarioClass} from "../../Clases/UsuarioClass";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @Input() usuarioC:UsuarioClass;
  constructor() { }

  ngOnInit() {
    console.log("Usuario local", this.usuarioC)
  }

}
