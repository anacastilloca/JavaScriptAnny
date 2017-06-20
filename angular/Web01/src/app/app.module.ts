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
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  //http
  bootstrap: [IniciComponent]
})
export class AppModule { }
