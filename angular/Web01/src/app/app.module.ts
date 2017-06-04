import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { EstiloComponent } from './estilo/estilo.component';
import { IniciComponent } from './Componente/inici/inici.component';
import { PlanetasComponent } from './Componente/planetas/planetas.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    IniciComponent,
    PlanetasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  //http
  bootstrap: [PlanetasComponent]
})
export class AppModule { }
