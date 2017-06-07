import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { EstiloComponent } from './estilo/estilo.component';
import { IniciComponent } from './Componente/inici/inici.component';
import { PlanetasComponent } from './Componente/planetas/planetas.component';
import { PlanetaStarWarsComponent } from './Componente/planeta-star-wars/planeta-star-wars.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    IniciComponent,
    PlanetasComponent,
    PlanetaStarWarsComponent
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
