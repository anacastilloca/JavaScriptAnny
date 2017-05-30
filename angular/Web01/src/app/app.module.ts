import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { EstiloComponent } from './estilo/estilo.component';
import { IniciComponent } from './Componente/inici/inici.component';
import { ReplicaWebPagComponent } from './replica-web-pag/replica-web-pag.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    IniciComponent,
    ReplicaWebPagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ReplicaWebPagComponent]
})
export class AppModule { }
