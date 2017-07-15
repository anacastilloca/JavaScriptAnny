import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { EstiloComponent } from './estilo/estilo.component';
import { IniciComponent } from './Componente/inici/inici.component';
import { PlanetasComponent } from './Componente/planetas/planetas.component';
import { PlanetaStarWarsComponent } from './Componente/planeta-star-wars/planeta-star-wars.component';
import { OrbitalPeriodComponent } from './Componente/planeta-star-wars/Componentes PSW/orbital-period/orbital-period.component';
import { DiameterComponent } from './Componente/planeta-star-wars/Componentes PSW/diameter/diameter.component';
import { ClimateComponent } from './Componente/planeta-star-wars/Componentes PSW/climate/climate.component';
import { GravityComponent } from './Componente/planeta-star-wars/Componentes PSW/gravity/gravity.component';
import { TerrainComponent } from './Componente/planeta-star-wars/Componentes PSW/terrain/terrain.component';
import { UsuarioComponent } from './Componente/usuario/usuario.component';
import { Pagina2Component } from './Componente/pagina2/pagina2.component';
import {ModuloDeRutas} from "./routes";
import { Pagina21Component } from './Componente/pagina2/ComponentesH/pagina21/pagina21.component';
import { Pagina22Component } from './Componente/pagina2/ComponentesH/pagina22/pagina22.component';
import { Pagina23Component } from './Componente/pagina2/ComponentesH/pagina23/pagina23.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from './Componente/Login/login/login.component';
import {TokenService} from "./token.service";

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    IniciComponent,
    PlanetasComponent,
    PlanetaStarWarsComponent,
    OrbitalPeriodComponent,
    DiameterComponent,
    ClimateComponent,
    GravityComponent,
    TerrainComponent,
    UsuarioComponent,
    Pagina2Component,
    Pagina21Component,
    Pagina22Component,
    Pagina23Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot() ,
    ModuloDeRutas
  ],
  providers: [
    TokenService
  ],
  //http
  bootstrap: [AppComponent]
})
export class AppModule { }
