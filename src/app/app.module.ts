import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/service.comics';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PruebastansaloneComponent } from './components/pruebastansalone/pruebastansalone.component';
import { ServicePostFiles } from './services/service.postfiles';
import { TestingfilesComponent } from './components/testingfiles/testingfiles.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    LibreriaComponent, 
    PersonasapiComponent, TestingfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,PruebastansaloneComponent
  ],
  providers: [ServiceComics, ServicePersonas
    , provideHttpClient(), ServicePostFiles],
  bootstrap: [AppComponent]
})
export class AppModule { }
