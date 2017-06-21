import {RouterModule, Routes} from "@angular/router";
import {IniciComponent} from "./Componente/inici/inici.component";
import {Pagina2Component} from "./Componente/pagina2/pagina2.component";
import {ModuleWithProviders} from "@angular/core";
import {Pagina21Component} from "./Componente/pagina2/ComponentesH/pagina21/pagina21.component";
import {Pagina22Component} from "./Componente/pagina2/ComponentesH/pagina22/pagina22.component";
import {Pagina23Component} from "./Componente/pagina2/ComponentesH/pagina23/pagina23.component";
/**
 * Created by USRDEL on 6/21/17.
 */

export const routees:Routes = [
  {
    path:"inicio",
    component:IniciComponent
  },
  {
    path:"pagina2/:idPagina2/:idPagina3",
    component:Pagina2Component,
    children:[
      {
        path:"pagina21/:idPartes",
        component:Pagina21Component
      },
      {
        path:"pagina22/:idCompetencias",
        component:Pagina22Component
      },
      {
        path:"pagina23/:idDuenios",
        component:Pagina23Component
      },
    ]
  }
]

export const ModuloDeRutas: ModuleWithProviders = RouterModule.forRoot(routees);

